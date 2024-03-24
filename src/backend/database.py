import sqlite3


def create_connection():
    connection = sqlite3.connect("app.db")
    cursor = connection.cursor()
    return connection, cursor


def create_table(cursor):
    cursor.execute(
        "CREATE TABLE IF NOT EXISTS session (id INTEGER PRIMARY KEY AUTOINCREMENT, prompt TEXT)"
    )


def close_connection(connection, cursor):
    cursor.close()
    connection.close()


def insert_into_database(cursor, text):
    cursor.execute(f"INSERT INTO session (prompt) VALUES  (?)", (text,))


def fetch_all(cursor):
    cursor.execute("SELECT * FROM session")
    return cursor.fetchall()
