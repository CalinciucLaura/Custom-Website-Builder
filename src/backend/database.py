import sqlite3
import json


def create_connection():
    connection = sqlite3.connect("app.db")
    cursor = connection.cursor()
    return connection, cursor


def create_table_website(cursor):
    cursor.execute(
        "CREATE TABLE IF NOT EXISTS website (id INTEGER PRIMARY KEY AUTOINCREMENT, id_user TEXT, title TEXT, about TEXT, description1 TEXT, description2 TEXT, description3 TEXT, quote TEXT, heroImage TEXT, image1 TEXT, image2 TEXT, image3 TEXT, image4 TEXT, image5 TEXT, idTemplate TEXT, colors TEXT, FOREIGN KEY(id_user) REFERENCES users(id_user))"
    )


def create_table_shop(cursor):
    cursor.execute(
        "CREATE TABLE IF NOT EXISTS shop (id INTEGER PRIMARY KEY AUTOINCREMENT, id_user TEXT, name TEXT, email TEXT, phone TEXT, description TEXT, category TEXT, FOREIGN KEY(id_user) REFERENCES users(id_user))"
    )


def create_table_products(cursor):
    cursor.execute(
        "CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, id_user TEXT, name TEXT, category TEXT, description TEXT, price TEXT, quantity TEXT, image TEXT, FOREIGN KEY(id_user) REFERENCES users(id_user))"
    )


def close_connection(connection, cursor):
    cursor.close()
    connection.close()


def insert_into_database(cursor, result_text, result_image, id_user, colors):
    colors = json.dumps(colors)
    cursor.execute(
        f"INSERT INTO website (id_user, title, about, description1, description2, description3, quote, heroImage, image1, image2, image3, image4, image5, colors) VALUES  (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )", (
            id_user, result_text[0], result_text[1], result_text[2], result_text[3], result_text[4], result_text[5], result_image[0], result_image[1], result_image[2], result_image[3], result_image[4], result_image[5], colors)
    )


def create_table_users(cursor):
    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS users (
            id_user INTEGER PRIMARY KEY AUTOINCREMENT, 
            first_name TEXT,
            last_name TEXT,
            email TEXT,
            password TEXT
        )
        """
    )


def create_table_portfolio(cursor):
    cursor.execute(
        "CREATE TABLE IF NOT EXISTS portfolio_record (id_portfolio INTEGER PRIMARY KEY AUTOINCREMENT, id_user INTEGER, first_name TEXT, last_name TEXT, email TEXT, phone TEXT, address TEXT, description TEXT, image TEXT, github TEXT, linkedin TEXT, role TEXT, color TEXT, resume TEXT, FOREIGN KEY(id_user) REFERENCES users(id_user))"
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
