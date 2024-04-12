from flask import Flask, render_template, current_app, send_file
from ColorPicker import color_pallete
from ChatBot import chatBot
from flask_cors import CORS
from flask import request, jsonify, g
from database import create_connection, create_table, close_connection, insert_into_database, select_all, create_table_portfolio
from ImageGenerator import generate_multiple_images

app = Flask(__name__, static_folder='images', static_url_path='/')
cors = CORS(app, resources={r"*": {"origins": "*"}})

@app.before_request
def before_request():
    g.db, g.cursor = create_connection()
    create_table(g.cursor)
    create_table_portfolio(g.cursor)
    create_table_experience(g.cursor)
    create_table_education(g.cursor)


@app.teardown_appcontext
def teardown(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        close_connection(*db)


@app.route('/prompt', methods=['POST'])
def chatgpt():
    data = request.get_json()
    text = data['text']
    result_text = chatBot(text)
    result_image = generate_multiple_images(text, 6)
    if result_text is None:
        result_text = "No result from chatBot"
    if result_image is None:
        result_image = "No result from imageGenerator"
    g.db, g.cursor = create_connection()
    insert_into_database(g.cursor, result_text, result_image)
    g.db.commit()
    return jsonify(result_text)

@app.route('/colors/<user_id>')
def color(user_id):
    if not user_id:
        return "Invalid user id"
    return color_pallete("images/cat.png")


@app.route('/prompt/<user_id>')
def get_text(user_id):
    if not user_id:
        return "Invalid user id"
    g.db, g.cursor = create_connection()
    result = select_all(g.cursor, user_id.replace(" ", ""))
    print(result)
    return jsonify(result)


if __name__ == '__main__':
    app.run(debug=True, port=5000)
