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
