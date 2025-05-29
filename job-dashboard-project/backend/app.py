# Import necessary libraries
from flask import Flask, jsonify                # Flask to create the web server; jsonify to send JSON responses
from flask_cors import CORS                     # CORS allows your React frontend to talk to this backend (cross-origin)
from sqlalchemy import create_engine            # Used to connect to the MySQL database
import pandas as pd                             # Pandas to handle and manipulate data from the database

# Initialize Flask app
app = Flask(__name__)

# Enable Cross-Origin Resource Sharing so React (localhost:3000) can access Flask (localhost:5000)
CORS(app)

# Create SQLAlchemy engine to connect to your MySQL database
# Format: mysql+mysqlconnector://<username>:<password>@<host>/<database>
# In your case, it connects to MySQL on localhost and accesses the database called "job application"
engine = create_engine("mysql+mysqlconnector://root:Poloniasi28~@localhost/job application")

# Define an API route (GET request) at http://localhost:5000/api/applications
@app.route('/api/applications')
def get_applications():
    try:
        # Query all records from the "job applications" table
        query = "SELECT * FROM `job applications`"
        
        # Use pandas to execute the SQL and return it as a DataFrame
        df = pd.read_sql(query, engine)

        # Convert DataFrame to a list of dictionaries and send as JSON
        return jsonify(df.to_dict(orient='records'))

    except Exception as e:
        # If something goes wrong, return the error as JSON
        return jsonify({'error': str(e)})

# Run the Flask app on port 5000 with debug mode ON (useful for development)
if __name__ == '__main__':
    app.run(port=5000, debug=True)