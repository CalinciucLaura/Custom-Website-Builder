from flask import Flask, render_template, current_app, send_file
from ColorPicker import color_pallete
from ChatBot import chatBot
from flask_cors import CORS
from flask import request, jsonify

app = Flask(__name__, static_folder='images', static_url_path='/')
CORS(app)


@app.route('/')
def index():
    return "Hello, World!"


@app.route('/prompt', methods=['POST'])
def chatgpt():
    data = request.get_json()
    text = data['text']
    result = chatBot(text)
    if result is None:
        result = "No result from chatBot"
    return jsonify(result)


@app.route('/colors/<user_id>')
def color(user_id):
    if not user_id:
        return "Invalid user id"
    return color_pallete("images/4.jpg")


@app.route('/images/<user_id>')
def images(user_id):
    if not user_id:
        return "Invalid user id"
    return [
        "http://localhost:5000/2.jpg",
        "http://localhost:5000/4.jpg",
        "http://localhost:5000/7.jpg",
        "http://localhost:5000/8.jpg",
        "http://localhost:5000/9.jpg",
        "http://localhost:5000/10.jpg"
    ]


if __name__ == '__main__':
    app.run(debug=True, port=5000)
