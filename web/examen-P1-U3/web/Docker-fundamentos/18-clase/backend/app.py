from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
# Esto permite que tu HTML de Nginx consulte la API de Flask de forma segura
CORS(app)

@app.route('/getMyInfo')
def getMyInfo():
    value = {
        "name": "Susana Jazmin",
        "lastname": "Villegas Zacatelco",
        "socialMedia": {
            "facebookUser": "susvz004",
            "instagramUser": "susvz004",
            "xUser": "susvz004",
            "linkedin": "susana-villegas",
            "githubUser": "SusVZ004"
        },
        "blog": "https://github.com/SusVZ004/26AProgWebSusanaVillegas",
        "author": "Susana Villegas"
    }
    return jsonify(value)

if __name__ == '__main__':
    app.run(port=5000)