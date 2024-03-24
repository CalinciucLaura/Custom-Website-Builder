import sqlite3


def create_connection():
    connection = sqlite3.connect("app.db")
    cursor = connection.cursor()
    return connection, cursor


def create_table(cursor):
    cursor.execute(
        "CREATE TABLE IF NOT EXISTS website (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, about TEXT, description1 TEXT, description2 TEXT, description3 TEXT, quote TEXT)"
    )


def close_connection(connection, cursor):
    cursor.close()
    connection.close()


def insert_into_database(cursor, result):
    cursor.execute(
        f"INSERT INTO website (title, about, description1, description2, description3, quote) VALUES  (?, ?, ?, ?, ?, ?)", (result[0], result[1], result[2], result[3], result[4], result[5]))


def select_all(cursor, id):
    query = f"SELECT title, about, description1, description2, description3, quote FROM website where id={id}"
    print(query)
    cursor.execute(query)
    return cursor.fetchall()
