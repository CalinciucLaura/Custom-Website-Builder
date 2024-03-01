import sqlite3

connection = sqlite3.connect("app.db")
print(connection.total_changes)
cursor = connection.cursor()
cursor.execute(
    "CREATE TABLE IF NOT EXISTS session (id INTEGER PRIMARY KEY AUTOINCREMENT, prompt TEXT)")
cursor.execute("INSERT INTO session VALUES (1, 'alice')")
cursor.execute("INSERT INTO session VALUES (2, 'bob')")
cursor.execute("INSERT INTO session VALUES (3, 'eve')")
connection.commit()

cursor.execute("SELECT * FROM example")
print(cursor.fetchall())
cursor.close()
connection.close()
