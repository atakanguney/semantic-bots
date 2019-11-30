import random

from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Hello, World!"

@app.route("/classify")
def classify():
    text = request.args.get('text')
    if not text:
        return jsonify({"msg":"No text parameter was specified"}), 404
    
    prob = random.uniform(0,1)

    return jsonify({"text": text, "probability": prob})
    
if __name__ == "__main__":
    app.run(debug=True)