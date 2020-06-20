from peewee import *

# required when importing from different directory (not a package)
from os import path
import sys
sys.path.append(path.join(path.dirname(__file__), '..'))
from src import model
from src.db import db

# mysql_db = MySQLDatabase('codey', user='root', password='root',
#                          host='127.0.0.1', port=3306)

tables = model.__all__
print("CREATING TABLES => " , tables)
db.create_tables(tables)
