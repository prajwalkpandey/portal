from flask_bcrypt import Bcrypt
from flask import Flask
app=Flask(__name__)
b=Bcrypt(app)
pw_hash = b.generate_password_hash('kjjakjaskldjlasjd')
print(pw_hash.decode('UTF-8'))
