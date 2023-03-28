from flask import Flask
from flask_cors import CORS
from connection import connection


app = Flask(__name__)
CORS(app)

# person = {
#   "name": "John",
#   "age": 23,
#   "skills": "Python"
# }

def get_data(path):
  data = connection()

  data_collection = data[path]
  
  return data_collection.find()

# def insert_data_to_db():
#   data=connection()
#   data_collection = data["users"]
#   data_collection.insert_one(person)
 

@app.route("/users")
def users():
  

  data = get_data("users")  #get
  users = []
  for doc in data:
    doc["_id"] = str(doc["_id"]) # converting object id to get data
    users.append(doc)
  return users
 

@app.route("/products")
def products():
  

  data = get_data("products")  #get
  products = []
  for doc in data:
    doc["_id"] = str(doc["_id"]) # converting object id to get data
    products.append(doc)
  return products

if __name__ == "__main__":
  app.run(port=4444)
   