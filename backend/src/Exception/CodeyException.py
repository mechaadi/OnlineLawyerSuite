import json

def CodeyException(code, message):
    error = json.dumps({
        'code': code,
        'message': message
    })