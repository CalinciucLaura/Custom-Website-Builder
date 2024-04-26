from flask import Flask, render_template, current_app, send_file
from ColorPicker import color_pallete
from ChatBot import chatBot
from flask_cors import CORS
from flask import request, jsonify, g
from database import create_connection, create_table, close_connection, insert_into_database, select_all, create_table_portfolio, create_table_experience, create_table_education, create_table_skills
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
    create_table_skills(g.cursor)


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


@app.route('/portfolio', methods=['POST'])
def portfolio():
    data = request.get_json()
    firstName = data['firstName']
    lastName = data['lastName']
    email = data['email']
    phone = data['phone']
    address = data['address']
    description = data['description']
    photo = data['photo']

    g.db, g.cursor = create_connection()
    g.cursor.execute("""
        INSERT INTO portfolio_record (first_name, last_name, email, phone, address, description, image)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    """, (firstName, lastName, email, phone, address, description, photo))
    g.db.commit()
    g.cursor.execute(
        "SELECT id FROM portfolio_record WHERE email = ?", (email,))
    user_id = g.cursor.fetchone()[0]
    print(user_id)
    return jsonify(user_id)


@app.route('/experience/<user_id>', methods=['POST'])
def experience(user_id):
    data = request.get_json()
    startingDate = data['startingDate']
    endingDate = data['endingDate']
    company = data['company']
    role = data['role']
    g.db, g.cursor = create_connection()
    g.cursor.execute("""
        INSERT INTO experience_record (id_user, starting_date, ending_date, company, role)
        VALUES (?, ?, ?, ?, ?)
    """, (user_id, startingDate, endingDate, company, role))
    g.db.commit()
    return jsonify("Experience added")


@app.route('/education/<user_id>', methods=['POST'])
def education(user_id):
    data = request.get_json()
    startingDate = data['startingDate']
    endingDate = data['endingDate']
    institution = data['institution']
    specialization = data['specialization']
    g.db, g.cursor = create_connection()
    g.cursor.execute("""
        INSERT INTO education_record (id_user, starting_date, ending_date, institution, specialization)
        VALUES (?, ?, ?, ?, ?)
    """, (user_id, startingDate, endingDate, institution, specialization))
    g.db.commit()
    return jsonify("Education added")


@app.route('/experience_education/<user_id>')
def get_education_experience(user_id):
    if not user_id:
        return "Invalid user id"
    g.db, g.cursor = create_connection()
    g.cursor.execute(
        "SELECT * FROM education_record WHERE id_user = ?", (user_id,))
    education = g.cursor.fetchall()
    g.cursor.execute(
        "SELECT * FROM experience_record WHERE id_user = ?", (user_id,))
    experience = g.cursor.fetchall()
    return jsonify({"education": education, "experience": experience})


@app.route('/portfolio/<user_id>')
def get_portfolio_data(user_id):
    if not user_id:
        return "Invalid user id"
    g.db, g.cursor = create_connection()
    g.cursor.execute("SELECT * FROM portfolio_record WHERE id = ?", (user_id,))
    info = g.cursor.fetchone()
    return jsonify(info)


@app.route('/skills/<user_id>', methods=['POST'])
def skills(user_id):
    data = request.get_json()
    skill = data['skill']
    g.db, g.cursor = create_connection()
    g.cursor.execute(
        "INSERT INTO skills_record (id_user, skill) VALUES (?, ?)", (user_id, skill))
    g.db.commit()
    return jsonify("Skills added")


@app.route('/skills/<user_id>')
def get_skills(user_id):
    if not user_id:
        return "Invalid user id"
    g.db, g.cursor = create_connection()
    g.cursor.execute(
        "SELECT skill FROM skills_record WHERE id_user = ?", (user_id,))
    skills = g.cursor.fetchall()
    return jsonify(skills)


if __name__ == '__main__':
    app.run(debug=True, port=5000)
