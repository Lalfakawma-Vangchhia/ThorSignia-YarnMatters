import mysql.connector
import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv() 

app = Flask(__name__)
CORS(app)

DB_CONFIG = {
    'host': os.environ.get('MYSQL_HOST'),
    'port': int(os.environ.get('MYSQL_PORT', 3306)),
    'user': os.environ.get('MYSQL_USER'),
    'password': os.environ.get('MYSQL_PASSWORD'),
    'database': os.environ.get('MYSQL_DB')
}

@app.route('/api/submit', methods=['POST'])
def submit():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    company = data.get('company')
    phone = data.get('phone')

    if not all([name, email, company, phone]):
        return jsonify({"message": "All fields are required."}), 400

    try:
        conn = mysql.connector.connect(**DB_CONFIG)
        cursor = conn.cursor()
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS contacts (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(100),
                email VARCHAR(100),
                company VARCHAR(100),
                phone VARCHAR(20)
            )
        """)
        cursor.execute("INSERT INTO contacts (name, email, company, phone) VALUES (%s, %s, %s, %s)",
                       (name, email, company, phone))
        conn.commit()
        cursor.close()
        conn.close()

        return jsonify({"message": "Contact submitted successfully!"})
    except mysql.connector.Error as err:
        return jsonify({"message": f"MySQL error: {err}"}), 500

if __name__ == "__main__":
    app.run(debug=True)
