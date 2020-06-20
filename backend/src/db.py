import peewee as pw
import os

import sys
from os import path
sys.path.append(path.join(path.dirname(__file__), '..'))
import load_env

db = pw.MySQLDatabase(
    os.getenv("DB_NAME"),
    user=os.getenv("DB_USER"),
    password=os.getenv("DB_PW"),
    host=os.getenv("DB_HOST"),
    port=int(os.getenv("DB_PORT")),
)

