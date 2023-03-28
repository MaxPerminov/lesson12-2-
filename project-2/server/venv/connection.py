from pymongo import MongoClient


def connection():
  CONNECTION_STRING = "mongodb+srv://maksym6111984:mptrinadssat6111984@cluster0.9bfrn1n.mongodb.net/?retryWrites=true&w=majority"
  client =  MongoClient(CONNECTION_STRING)
  return client ["data"] # database name in mongo

#app.py

# def insert_data_to_db():
#   data=connection()
#   data_collection = data["users"]
#   ammount_of_users = data_collection.count_documents({"name": "John"})
#   if ammount_of_users > 0:
#     raise NameError( f"There is {ammount_of_users} users, mend it other way!")
#   data_collection.insert_one(person)
