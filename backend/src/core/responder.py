from flask import jsonify

class Responder:
    def __init__(self):
        pass

    def respond(self, data, code):
        self.data = data
        self.code = code

        return jsonify({"data": data, "status": code}), code

    def respond_error(self, msg, errorCode):
        self.msg = msg
        self.errorCode = errorCode

        return jsonify({"msg": msg, "status": errorCode}), errorCode