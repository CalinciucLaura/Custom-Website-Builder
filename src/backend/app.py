from flask import Flask, render_template, current_app, send_file
from ColorPicker import color_pallete
from ChatBot import chatBot
from flask_cors import CORS
from flask import request, jsonify, g
from database import create_connection, create_table, close_connection, insert_into_database, select_all, create_table_portfolio, create_table_experience, create_table_education, create_table_skills, create_table_projects
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
    create_table_projects(g.cursor)


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
    github = data['github']
    linkedin = data['linkedin']
    role = data['role']

    g.db, g.cursor = create_connection()
    g.cursor.execute("""
        INSERT INTO portfolio_record (first_name, last_name, email, phone, address, description, image, github, linkedin, role)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (firstName, lastName, email, phone, address, description, photo, github, linkedin, role))
    g.db.commit()
    g.cursor.execute(
        "SELECT id FROM portfolio_record WHERE email = ?", (email,))
    user_id = g.cursor.fetchone()[0]
    print(user_id)
    return jsonify(user_id)


@app.route('/portfolio/<user_id>')
def get_portfolio_data(user_id):
    if not user_id:
        return "Invalid user id"
    g.db, g.cursor = create_connection()
    g.cursor.execute("SELECT * FROM portfolio_record WHERE id = ?", (user_id,))
    info = g.cursor.fetchone()
    return jsonify(info)


@app.route('/portfolio/<user_id>', methods=['POST'])
def updatePortfolio(user_id):
    data = request.get_json()
    firstName = data['firstName']
    lastName = data['lastName']
    email = data['email']
    phone = data['phone']
    address = data['address']
    description = data['description']
    image = data['image']
    github = data['github']
    linkedin = data['linkedin']
    role = data['role']
    color = data['color']
    g.db, g.cursor = create_connection()
    g.cursor.execute(
        "UPDATE portfolio_record SET first_name = ?, last_name = ?, email = ?, phone = ?, address = ?, description = ?, image = ?, github = ?, linkedin = ?, role = ?, color = ? WHERE id = ?", (firstName, lastName, email, phone, address, description, image, github, linkedin, role, color, user_id))
    g.db.commit()

    return jsonify("Portfolio updated")


@app.route('/portfolio/<user_id>/education', methods=['POST'])
def educationPortfolio(user_id):
    data = request.get_json()
    new_education = data.get('education', [])
    g.db, g.cursor = create_connection()

    g.cursor.execute(
        "SELECT * FROM education_record WHERE id_user = ?", (user_id,))
    current_education = g.cursor.fetchall()

    if len(new_education) == 0:
        print("No education records found")
        g.cursor.execute("""
        DELETE FROM education_record WHERE id_user = ?
        """, (user_id,))
        g.db.commit()
        return jsonify("Education modified")

    current_education_dict = {edu[0]: edu for edu in current_education}

    for edu in new_education:
        if edu[0] in current_education_dict:
            g.cursor.execute("""
                UPDATE education_record
                SET starting_date = ?, ending_date = ?, institution = ?, specialization = ?
                WHERE id = ?
            """, (edu[2], edu[3], edu[4], edu[5], edu[0]))
            # Remove the updated record from the dictionary
            del current_education_dict[edu[0]]
        else:
            g.cursor.execute("""
                INSERT INTO education_record (id_user, starting_date, ending_date, institution, specialization)
                VALUES (?, ?, ?, ?, ?)
            """, (user_id, edu[2], edu[3], edu[4], edu[5]))

    for edu_id in current_education_dict.keys():
        g.cursor.execute(
            "DELETE FROM education_record WHERE id = ?", (edu_id,))
    g.db.commit()
    return jsonify("Education modified")


@app.route('/portfolio/<user_id>/experience', methods=['POST'])
def experiencePortfolio(user_id):
    data = request.get_json()
    new_experience = data.get('experience', [])
    g.db, g.cursor = create_connection()

    g.cursor.execute(
        "SELECT * FROM experience_record WHERE id_user = ?", (user_id,))
    current_experience = g.cursor.fetchall()

    if len(new_experience) == 0:
        print("No experience records found")
        g.cursor.execute("""
        DELETE FROM experience_record WHERE id_user = ?
        """, (user_id,))
        g.db.commit()
        return jsonify("Experience modified")

    current_experience_dict = {exp[0]: exp for exp in current_experience}

    for exp in new_experience:
        if exp[0] in current_experience_dict:
            g.cursor.execute("""
                UPDATE experience_record
                SET starting_date = ?, ending_date = ?, company = ?, role = ?
                WHERE id = ?
            """, (exp[2], exp[3], exp[4], exp[5], exp[0]))
            # Remove the updated record from the dictionary
            del current_experience_dict[exp[0]]
        else:
            g.cursor.execute("""
                INSERT INTO experience_record (id_user, starting_date, ending_date, company, role)
                VALUES (?, ?, ?, ?, ?)
            """, (user_id, exp[2], exp[3], exp[4], exp[5]))

    for exp_id in current_experience_dict.keys():
        g.cursor.execute(
            "DELETE FROM experience_record WHERE id = ?", (exp_id,))
    g.db.commit()
    return jsonify("Experience modified")


@app.route('/portfolio/<user_id>/skills', methods=['POST'])
def skillsPortfolio(user_id):
    data = request.get_json()
    new_skills = data.get('skills', [])
    g.db, g.cursor = create_connection()

    g.cursor.execute(
        "SELECT * FROM skills_record WHERE id_user = ?", (user_id,))
    current_skills = g.cursor.fetchall()

    if len(new_skills) == 0:
        print("No skills records found")
        g.cursor.execute("""
        DELETE FROM skills_record WHERE id_user = ?
        """, (user_id,))
        g.db.commit()
        return jsonify("Skills modified")

    current_skills_dict = {skill[0]: skill for skill in current_skills}
    for skill in new_skills:
        if skill[0] in current_skills_dict:
            g.cursor.execute("""
                UPDATE skills_record
                SET skill = ?
                WHERE id = ?
            """, (skill[1], skill[0]))
            # Remove the updated record from the dictionary
            del current_skills_dict[skill[0]]
        else:
            g.cursor.execute("""
                INSERT INTO skills_record (id_user, skill)
                VALUES (?, ?)
            """, (user_id, skill[0]))

    for skill_id in current_skills_dict.keys():
        g.cursor.execute(
            "DELETE FROM skills_record WHERE id = ?", (skill_id,))
    g.db.commit()
    return jsonify("Skills modified")


@app.route('/portfolio/<user_id>/projects', methods=['POST'])
def projectsPortfolio(user_id):
    data = request.get_json()
    new_projects = data.get('projects', [])
    g.db, g.cursor = create_connection()

    g.cursor.execute(
        "SELECT * FROM projects_record WHERE id_user = ?", (user_id,))
    current_projects = g.cursor.fetchall()

    if len(new_projects) == 0:
        print("No projects records found")
        g.cursor.execute("""
        DELETE FROM projects_record WHERE id_user = ?
        """, (user_id,))
        g.db.commit()
        return jsonify("Projects modified")

    current_projects_dict = {
        project[0]: project for project in current_projects}

    print("New projects: ")
    print(new_projects)

    print("Current projects: ")
    print(current_projects)

    for project in new_projects:
        if project[0] in current_projects_dict:
            g.cursor.execute("""
                UPDATE projects_record
                SET title = ?, description = ?, link = ?
                WHERE id = ?
            """, (project[2], project[3], project[4], project[0]))
            # Remove the updated record from the dictionary
            del current_projects_dict[project[0]]
        else:
            g.cursor.execute("""
                INSERT INTO projects_record (id_user, title, description, link)
                VALUES (?, ?, ?, ?)
            """, (user_id, project[2], project[3], project[4]))

    for project_id in current_projects_dict.keys():
        g.cursor.execute(
            "DELETE FROM projects_record WHERE id = ?", (project_id,))
    g.db.commit()
    return jsonify("Projects modified")


@app.route('/portfolio/color/<user_id>', methods=['POST'])
def colorPortfolio(user_id):
    data = request.get_json()
    color = data['color']
    g.db, g.cursor = create_connection()
    g.cursor.execute(
        "UPDATE portfolio_record SET color = ? WHERE id = ?", (color, user_id))
    g.db.commit()
    return jsonify("Color added")


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


@app.route('/projects/<user_id>', methods=['POST'])
def projects(user_id):
    data = request.get_json()
    title = data['title']
    description = data['description']
    link = data['link']
    g.db, g.cursor = create_connection()
    g.cursor.execute(
        "INSERT INTO projects_record (id_user, title, description, link) VALUES (?, ?, ?, ?)", (user_id, title, description, link))
    g.db.commit()

    return jsonify("Projects added")


@app.route('/projects/<user_id>')
def get_projects(user_id):
    if not user_id:
        return "Invalid user id"
    g.db, g.cursor = create_connection()
    g.cursor.execute(
        "SELECT * FROM projects_record WHERE id_user = ?", (user_id,))
    projects = g.cursor.fetchall()
    return jsonify(projects)


if __name__ == '__main__':
    app.run(debug=True, port=5000)
