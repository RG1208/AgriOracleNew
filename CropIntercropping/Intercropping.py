import numpy as np
import pandas as pd
import tensorflow as tf
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout, BatchNormalization
from tensorflow.keras.optimizers import Adam
from tensorflow.keras.callbacks import EarlyStopping, ReduceLROnPlateau
import joblib

# 🔹 Fix Random Seed for Consistency
np.random.seed(50)
tf.random.set_seed(50)

# 🌾 Intercropping Dataset (Example)
data = {
    "primary_crop": ["Maize", "Wheat", "Rice", "Tomato", "Peas", "Barley", "Corn", "Wheat", "Rice", "Peas"],
    "soil_type": ["Clay", "Loam", "Sandy", "Loam", "Clay", "Sandy", "Loam", "Loam", "Clay", "Sandy"],
    "season": ["Kharif", "Rabi", "Rabi", "Kharif", "Kharif", "Rabi", "Rabi", "Rabi", "Kharif", "Kharif"],
    "companion_crop": ["Soybean", "Mustard", "Lentils", "Spinach", "Peas", "Carrot", "Wheat", "Mustard", "Lentils", "Corn"]
}
df = pd.DataFrame(data)

# 🔹 One-Hot Encode Categorical Data
encoder = OneHotEncoder()
X = encoder.fit_transform(df[["primary_crop", "soil_type", "season"]]).toarray()

y_encoder = OneHotEncoder()
y = y_encoder.fit_transform(df[["companion_crop"]]).toarray()

# 🔹 Split Data for Better Generalization
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=50)

# 🔥 Improved Deep Learning Model
model = Sequential([
    Dense(256, activation='relu', input_shape=(X.shape[1],)),
    BatchNormalization(),
    Dropout(0.1),
    
    Dense(128, activation='relu'),
    BatchNormalization(),
    Dropout(0.1),
    
    Dense(64, activation='relu'),
    Dropout(0.1),
    
    Dense(y.shape[1], activation='softmax')
])

# 🔹 Compile Model with Optimizations
optimizer = Adam(learning_rate=0.001)
model.compile(optimizer=optimizer, loss='categorical_crossentropy', metrics=['accuracy'])

# 🚀 Train Model with Early Stopping & Learning Rate Scheduler
early_stopping = EarlyStopping(monitor='val_loss', patience=10, restore_best_weights=True)
lr_scheduler = ReduceLROnPlateau(monitor='val_loss', factor=0.5, patience=5)

history = model.fit(X_train, y_train, epochs=100, batch_size=16, validation_data=(X_test, y_test),
                    callbacks=[early_stopping, lr_scheduler], verbose=1)

# ✅ Save the Trained Model
model.save("intercropping_model.h5")

# ✅ Save the Encoders
joblib.dump(encoder, "feature_encoder.pkl")
joblib.dump(y_encoder, "label_encoder.pkl")

# ✅ Display Final Training & Validation Accuracy
final_train_acc = history.history['accuracy'][-1]
print(f"\n✅ Final Training Accuracy: {final_train_acc:.4f}")
# 🚜 Take Farmer Input
primary_crop = input("Enter your primary crop (Maize/Wheat/Rice/Tomato/Peas/Barley/Corn): ").strip().capitalize()
soil_type = input("Enter your soil type (Clay/Loam/Sandy): ").strip().capitalize()
season = input("Enter the season (Kharif/Rabi): ").strip().capitalize()

# Validate input
input_data = pd.DataFrame([[primary_crop, soil_type, season]], columns=["primary_crop", "soil_type", "season"])
input_encoded = encoder.transform(input_data).toarray()

# 🔮 AI Prediction
predicted_probs = model.predict(input_encoded)
predicted_crop = y_encoder.inverse_transform(predicted_probs).flatten()[0]

# 📌 Dynamic Reasoning
reasoning = ""

# 1️⃣ Nutrient Complementation
if primary_crop == "Maize":
    reasoning += "Maize is a heavy feeder; intercropping with legumes like Soybean helps in nitrogen fixation. "
elif primary_crop == "Wheat":
    reasoning += "Wheat benefits from intercropping with Mustard, which can suppress weeds and pests. "

# 2️⃣ Pest Control
if soil_type == "Clay":
    reasoning += "Clay soil retains moisture, making it suitable for crops like Soybean that require consistent water supply. "
elif soil_type == "Sandy":
    reasoning += "Sandy soil drains quickly; intercropping with drought-tolerant crops like Peas can be beneficial. "

# 3️⃣ Growth Habit Compatibility
if season == "Kharif":
    reasoning += "During Kharif, warm-season crops like Maize grow vigorously, making it ideal for intercropping with legumes. "
elif season == "Rabi":
    reasoning += "Rabi season favors cool-season crops; intercropping with Mustard can optimize space and resources. "

# Ensure there's a reasoning
if not reasoning:
    reasoning = "Intercropping improves soil fertility, reduces pests, and enhances yield."

print(f"\n🌾 AI Recommended Companion Crop: {predicted_crop}")
print(f"📌 Reason: {reasoning}")
model.save("my_model.h5")

