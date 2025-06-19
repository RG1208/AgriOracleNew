from flask import Flask, request, jsonify
import tensorflow as tf
from keras.models import load_model  # type: ignore
from keras.preprocessing import image  # type: ignore
import numpy as np
from io import BytesIO
from PIL import Image
import pandas as pd
import joblib
import os
import uuid
from flask_cors import CORS  # type: ignore

app = Flask(__name__)
CORS(app)  # type: ignore

# Load models
intercrop_model = tf.keras.models.load_model("intercropping_model.h5")

# Load encoders for crop rotation
intercrop_encoder = joblib.load("intercrop_encoder.pkl")
intercrop_y_encoder = joblib.load("intercrop_label_encoder.pkl")

@app.route('/')
def index():
    return jsonify({'message': 'AgriOracle backend is running ✅'})

@app.route('/test', methods=['GET'])
def test():
    return jsonify({"message": "API is working!"}), 200

@app.route('/recommend_intercrop', methods=['POST'])
def recommend_intercrop():
    try:
        print("🔍 Step 1: Getting JSON")
        data = request.get_json()

        print("🔍 Step 2: Extracting fields")
        primary_crop = data.get("primary_crop", "").capitalize()
        soil_type = data.get("soil_type", "").capitalize()
        season = data.get("season", "").capitalize()

        print("🔍 Step 3: Creating DataFrame")
        input_df = pd.DataFrame([[primary_crop, soil_type, season]], columns=["primary_crop", "soil_type", "season"])

        print("🔍 Step 4: Encoding data")
        input_encoded = intercrop_encoder.transform(input_df).toarray()

        print("🔍 Step 5: Predicting with model")
        predicted_probs = intercrop_model.predict(input_encoded)
        predicted_crop = intercrop_y_encoder.inverse_transform(predicted_probs).flatten()[0]

        print("🔍 Step 6: Creating reasoning")
        reasoning = ""
        if primary_crop == "Maize":
            reasoning += "Maize is a heavy feeder; intercropping with legumes like Soybean helps fix nitrogen. "
        elif primary_crop == "Wheat":
            reasoning += "Wheat can benefit from Mustard, which helps with weed suppression. "

        if soil_type == "Clay":
            reasoning += "Clay soil retains moisture, suitable for water-reliant crops like Soybean. "
        elif soil_type == "Sandy":
            reasoning += "Sandy soil drains quickly; Peas and similar crops can be ideal. "

        if season == "Kharif":
            reasoning += "Warm-season crops during Kharif favor legumes as intercrops. "
        elif season == "Rabi":
            reasoning += "Rabi season favors Mustard and other cool-season intercrops. "

        if not reasoning:
            reasoning = "Intercropping improves soil fertility, pest control, and yields."

        return jsonify({
            "recommended_crop": predicted_crop,
            "reasoning": reasoning
        })

    except Exception as e:
        print(f"❌ Error: {str(e)}")
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=False)
