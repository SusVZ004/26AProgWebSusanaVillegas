import json
from flask import Flask
app = Flask(__name__)

@app.route('/getMyInfo')
def getMyInfo():
    value = {
        "name": "Susana Jazmin",
        "lastname": "Villegas Zacatelco",
        "socialMedia": [
            {"facebookUser": "susvz004"},
            {"instagramUser": "susvz004"},
            {"xUser": "susvz004"},
            {"linkedin": "susana-villegas"},
            {"githubUser": "SusVZ004"}
        ],
        "blog": "https://github.com/SusVZ004/26AProgWebSusanaVillegas",
        "author": "Susana Villegas"
    }
    return json.dumps(value)

if __name__ == '__main__':
    # Esto asegura que Flask escuche dentro del contenedor Docker en el puerto 5000
    app.run(host='0.0.0.0', port=5000)