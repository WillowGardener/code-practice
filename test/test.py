import string
import random

characters = string.ascii_letters + string.digits


char = random.choice(characters)

short_url = ''

for i in range(6):

    short_url += random.choice(characters)

print(short_url)