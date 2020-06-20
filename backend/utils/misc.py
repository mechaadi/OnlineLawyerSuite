from string import ascii_letters, digits
from random import choice


alphanumeric = ascii_letters + digits


def generate_random_string(length=30):
    result = ""
    for _ in range(length):
        result += choice(alphanumeric)

    return result
