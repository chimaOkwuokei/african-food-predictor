# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
import torch.nn as nn
import torchvision.models as models
from torchvision import transforms
from PIL import Image
import io

app = Flask(__name__)

# inititally had cors isssues because both projects are being run on seperate servers
# so i had to inititalize it
CORS(app)

# Load the model
model = models.resnet50()
old_dict = torch.load('resnet50_epoch50_batch32.pt')
new_dict = {}
for old_key in old_dict:
    # the model sent had fc.1. but the code expected fc., so i changed it
    new_key = old_key.replace('fc.1.', 'fc.')
    new_dict[new_key] = old_dict[old_key]
model.fc = torch.nn.Linear(in_features=2048, out_features=10)
model.load_state_dict(new_dict)

# Set the model to evaluation mode
model.eval()

# Class labels
class_labels = [
    'akara', 'banga soup', 'edikaikong soup',
    'egusi soup', 'ewedu soup', 'jollof rice',
    'masa', 'moimoi', 'ogbono soup', 'okra soup'
]

def preprocess_image(image):
    # Convert image to RGB if it has an alpha channel (RGBA)
    if image.mode != 'RGB':
        image = image.convert('RGB')

    preprocess = transforms.Compose([
        transforms.Resize(256),
        transforms.CenterCrop(224),
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
    ])
    image = preprocess(image).unsqueeze(0)
    return image

# Define prediction function
def predict(image_bytes):
    image = Image.open(io.BytesIO(image_bytes))
    image = preprocess_image(image)
    with torch.no_grad():
        outputs = model(image)
    _, predicted = torch.max(outputs, 1)
    return class_labels[predicted.item()]

@app.route('/predict', methods=['POST'])
def predict_route():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    image_bytes = file.read()

    # the frontend sent data in form of bytes
    prediction = predict(image_bytes)
    print(prediction)
    return jsonify({'prediction': prediction})

if __name__ == "__main__":
    import os
    
    # Get the port from environment variables (default to 5000)
    port = int(os.environ.get("PORT", 5000))
    
    # Check if running in production (Gunicorn sets 'GUNICORN_CMD_ARGS')
    if "GUNICORN_CMD_ARGS" in os.environ:
        # Running with Gunicorn, so do nothing (Gunicorn will call `app`)
        pass
    else:
        # Running locally, so use Flask's built-in server
        app.run(host="0.0.0.0", port=port, debug=True)
