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

# Directories
UPLOAD_FOLDER = 'static/uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
TEMPLATE_FOLDER = 'templates'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Max file size (16 MB limit)
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16 MB

# Allowed file extensions (only images)
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

# Helper function to check allowed file types
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Load models
disease_model = load_model("all_3_classification_mobilenetv2.h5")

# Class labels for disease detection
disease_class_labels = [
    "Cotton Bacterial Blight", "Cotton Boll Rot", "Cotton Healthy", "Cotton Mildew",
    "Potato Common Scab", "Potato Dry Rot", "Potato Healthy", "Potato Scab",
    "Rice Leaf Blight", "Rice Healthy", "Rice Leaf Scald", "Rice Sheath Blight",
    "Wheat Black Rust", "Wheat Head Blight", "Wheat Healthy", "Wheat Mildew", "Wheat Smut"
]
img_size = (224, 224)

# Reason and cure dictionaries
disease_reasons = {
    "Cotton Bacterial Blight": "Caused by Xanthomonas citri, spread by rain splash and infected seeds.",
    "Cotton Boll Rot": "Fungal/bacterial infection during boll development in wet weather.",
    "Cotton Healthy": "Plant is healthy; proper management maintained.",
    "Cotton Mildew": "Caused by Leveillula taurica, thrives in humid, poorly ventilated areas.",
    "Potato Common Scab": "Caused by Streptomyces bacteria in dry, alkaline soil.",
    "Potato Dry Rot": "Fusarium fungi infect tubers via harvest wounds.",
    "Potato Healthy": "Healthy crop due to good practices.",
    "Potato Scab": "Caused by Streptomyces scabies, in dry, alkaline conditions.",
    "Rice Leaf Blight": "Xanthomonas oryzae, often triggered by wind damage.",
    "Rice Healthy": "Healthy plant with good water management.",
    "Rice Leaf Scald": "Fungus triggered by nutrient-poor soil and weather changes.",
    "Rice Sheath Blight": "Rhizoctonia solani thrives in dense, humid plantings.",
    "Wheat Black Rust": "Puccinia graminis fungus spreads via wind in humid weather.",
    "Wheat Head Blight": "Fusarium fungi, common in wet, warm flowering stages.",
    "Wheat Healthy": "Healthy crop with good soil and disease management.",
    "Wheat Mildew": "Blumeria graminis thrives in cool, damp conditions.",
    "Wheat Smut": "Tilletia fungi spread via infected seeds."
}

cure_recommendations = {
    "Cotton Bacterial Blight": "Use certified seeds, rotate crops, apply copper sprays, and avoid overhead irrigation.",
    "Cotton Boll Rot": "Improve spacing, use fungicides during flowering, and remove rotting bolls.",
    "Cotton Healthy": "Continue good field practices and monitoring.",
    "Cotton Mildew": "Apply fungicides, improve ventilation, and avoid excessive humidity.",
    "Potato Common Scab": "Lower soil pH, use resistant varieties, and keep soil moist.",
    "Potato Dry Rot": "Handle carefully, treat seeds with fungicide, store properly.",
    "Potato Healthy": "Maintain rotation, soil health, and disease checks.",
    "Potato Scab": "Moist soil during tuber formation, avoid lime, use resistant seeds.",
    "Rice Leaf Blight": "Use resistant varieties, apply bactericides, clean fields.",
    "Rice Healthy": "Continue balanced irrigation and fertilizer practices.",
    "Rice Leaf Scald": "Fertilize well, improve drainage, use resistant types.",
    "Rice Sheath Blight": "Use fungicides like azoxystrobin, space plants.",
    "Wheat Black Rust": "Resistant varieties, apply fungicides early, remove infected debris.",
    "Wheat Head Blight": "Fungicides during flowering, rotate crops, plow old wheat debris.",
    "Wheat Healthy": "Keep soil and crop health practices ongoing.",
    "Wheat Mildew": "Use resistant seeds, fungicides, and reduce overcrowding.",
    "Wheat Smut": "Treat seeds, remove infected heads, rotate crops."
}

@app.route('/')
def index():
    return jsonify({'message': 'AgriOracle backend is running ✅'})

@app.route('/test', methods=['GET'])
def test():
    return jsonify({"message": "API is working!"}), 200

@app.route('/predict_disease', methods=['POST'])
def predict_disease():
    if 'file' not in request.files or not allowed_file(request.files['file'].filename):
        return jsonify({'error': 'Invalid file type. Only images are allowed.'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400

    try:
        # Save file
        ext = os.path.splitext(file.filename)[-1]
        unique_name = f"{uuid.uuid4().hex}{ext}"
        save_path = os.path.join(UPLOAD_FOLDER, unique_name)
        file.save(save_path)

        # Predict
        img = Image.open(save_path).resize(img_size)
        img_array = image.img_to_array(img)
        img_array_expanded = np.expand_dims(img_array, axis=0) / 255.0

        prediction = disease_model.predict(img_array_expanded)
        predicted_index = np.argmax(prediction, axis=1)[0]
        predicted_label = disease_class_labels[predicted_index] if predicted_index < len(disease_class_labels) else "Unknown Class"

        reason = disease_reasons.get(predicted_label, "Reason not available.")
        cure = cure_recommendations.get(predicted_label, "Cure not available.")

        return jsonify({
            'prediction': predicted_label,
            'reason': reason,
            'cure': cure,
            'image_url': f"/static/uploads/{unique_name}"
        })
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=False)
