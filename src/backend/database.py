import sqlite3


def create_connection():
    connection = sqlite3.connect("app.db")
    cursor = connection.cursor()
    return connection, cursor


def create_table(cursor):
    cursor.execute(
        "CREATE TABLE IF NOT EXISTS website (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, about TEXT)"
    )


def close_connection(connection, cursor):
    cursor.close()
    connection.close()


def insert_into_database(cursor, result):
    cursor.execute(
        f"INSERT INTO website (title, about) VALUES  (?, ?)", (result[0], result[1]))


def fetch_all(cursor):
    cursor.execute("SELECT * FROM website")
    return cursor.fetchall()
