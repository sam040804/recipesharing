from flask import Flask, send_from_directory
from flask_cors import CORS
from config import Config
from models.models import db
from routes.recipes import recipes_bp
import os

app = Flask(__name__, static_folder="frontend", static_url_path="")
app.config.from_object(Config)
db.init_app(app)
CORS(app)
app.register_blueprint(recipes_bp)

# Create tables at startup
with app.app_context():
    db.create_all()

# Serve index.html
@app.route("/")
def serve_index():
    return send_from_directory(app.static_folder, "index.html")

# Serve other frontend files
@app.route("/<path:path>")
def serve_file(path):
    return send_from_directory(app.static_folder, path)

if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=5000)
