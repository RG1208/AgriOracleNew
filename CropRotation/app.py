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
rotation_model = tf.keras.models.load_model("crop_rotation_model.h5")

# Load encoders for crop rotation
encoder = joblib.load("feature_encoder.pkl")
y_encoder = joblib.load("label_encoder.pkl")

@app.route('/')
def index():
    return jsonify({'message': 'AgriOracle backend is running ✅'})

@app.route('/test', methods=['GET'])
def test():
    return jsonify({"message": "API is working!"}), 200

@app.route('/recommend_crop', methods=['POST'])
def recommend_crop():
    try:
        data = request.get_json()
        previous_crop = data.get("previous_crop", "").capitalize()
        soil_type = data.get("soil_type", "").capitalize()
        season = data.get("season", "").capitalize()

        input_df = pd.DataFrame([[previous_crop, soil_type, season]], columns=["previous_crop", "soil_type", "season"])
        input_encoded = encoder.transform(input_df).toarray()
        predicted_probs = rotation_model.predict(input_encoded)
        predicted_crop = y_encoder.inverse_transform(predicted_probs).flatten()[0]

        # Reasoning logic
        reasoning = ""
        if previous_crop in ["Wheat", "Corn", "Rice", "Maize", "Sugarcane"]:
            reasoning += "The previous crop depleted nitrogen, so the suggested crop helps restore soil fertility. "
        elif previous_crop in ["Peas", "Lentils", "Soybean", "Groundnut"]:
            reasoning += "The previous crop fixed nitrogen, enriching the soil. "

        if soil_type == "Clay":
            reasoning += "Clay soil retains moisture well, suitable for this crop. "
        elif soil_type == "Sandy":
            reasoning += "Sandy soil drains fast; suggested crop is drought-tolerant. "
        elif soil_type == "Loam":
            reasoning += "Loam soil supports a wide variety of crops. "

        if season == "Kharif":
            reasoning += "This crop thrives in monsoon (Kharif) conditions. "
        elif season == "Rabi":
            reasoning += "This crop is suitable for cool, dry (Rabi) season. "

        if (previous_crop, predicted_crop) in [
            ("Rice", "Wheat"), ("Wheat", "Lentils"), ("Peas", "Corn"),
            ("Soybean", "Barley"), ("Maize", "Mustard"), ("Sugarcane", "Oats")
        ]:
            reasoning += "This rotation disrupts pests and diseases. "

        if not reasoning:
            reasoning = "This crop maintains soil health and supports sustainable yield."

        return jsonify({
            "recommended_crop": predicted_crop,
            "reasoning": reasoning
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=False)
