import sqlite3


def create_connection():
    connection = sqlite3.connect("app.db")
    cursor = connection.cursor()
    return connection, cursor


def create_table(cursor):
    cursor.execute(
        "CREATE TABLE IF NOT EXISTS website (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, about TEXT, description1 TEXT, description2 TEXT, description3 TEXT, quote TEXT, heroImage TEXT, image1 TEXT, image2 TEXT, image3 TEXT, image4 TEXT, image5 TEXT)"
    )


def close_connection(connection, cursor):
    cursor.close()
    connection.close()


def insert_into_database(cursor, result_text, result_image):
    cursor.execute(
        f"INSERT INTO website (title, about, description1, description2, description3, quote, heroImage, image1, image2, image3, image4, image5) VALUES  (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", (
            result_text[0], result_text[1], result_text[2], result_text[3], result_text[4], result_text[5], result_image[0], result_image[1], result_image[2], result_image[3], result_image[4], result_image[5])
    )


def select_all(cursor, id):
    query = f"SELECT title, about, description1, description2, description3, quote, heroImage, image1, image2, image3, image4, image5 FROM website where id={id}"
    print(query)
    cursor.execute(query)
    return cursor.fetchall()


def create_table_portfolio(cursor):
    cursor.execute(
        "CREATE TABLE IF NOT EXISTS portfolio_record (id INTEGER PRIMARY KEY AUTOINCREMENT, first_name TEXT, last_name TEXT, email TEXT, phone TEXT, address TEXT, description TEXT, image TEXT, github TEXT, linkedin TEXT, role TEXT, color TEXT)"
    )


def create_table_experience(cursor):
    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS experience_record (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            id_user INTEGER, 
            starting_date TEXT, 
            ending_date TEXT, 
            company TEXT, 
            role TEXT,
            FOREIGN KEY(id_user) REFERENCES users(id)
        )
        """
    )


def create_table_education(cursor):
    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS education_record (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            id_user INTEGER, 
            starting_date TEXT, 
            ending_date TEXT, 
            institution TEXT, 
            specialization TEXT,
            FOREIGN KEY(id_user) REFERENCES users(id)
        )
        """
    )


def create_table_skills(cursor):
    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS skills_record (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            id_user INTEGER, 
            skill TEXT,
            FOREIGN KEY(id_user) REFERENCES users(id)
        )
        """
    )


def create_table_projects(cursor):
    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS projects_record (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            id_user INTEGER, 
            title TEXT, 
            description TEXT, 
            link TEXT,
            FOREIGN KEY(id_user) REFERENCES users(id)
        )
        """
    )
