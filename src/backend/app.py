from flask import Flask, render_template
from ColorPicker import color_pallete

app = Flask(__name__, static_folder='build', static_url_path='/')


@app.route('/')
def index():
    return "Hello, World!"


@app.route('/colors')
def color():
    return color_pallete("1.jpg")


if __name__ == '__main__':
    app.run(debug=True, port=5000)
