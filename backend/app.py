from flask import Flask, jsonify, request
from flask_cors import CORS  
import json


app = Flask(__name__)
CORS(app) 

def get_accommodation():
    with open("accommodation.json", "r", encoding="utf-8") as file:
        return json.load(file)
    
@app.route('/acomodacoes', methods=['GET'])
def get_accommodation_list():
    accommodation_list = get_accommodation()
    city = request.args.get('cidade')

    if not city:
        return jsonify(accommodation_list)
    else:
        city = city.lower()
        filtered_accommodation = [
            acc for acc in accommodation_list if city in acc["localizacao"].lower()
        ]

        return jsonify(filtered_accommodation)


@app.route('/acomodacoes/<int:id>', methods=['GET'])
def get_accommodation_details(id):
    accommodation_list = get_accommodation()
    for accommodation in accommodation_list:
        if accommodation.get('id') == id:
            return jsonify(accommodation)
    return jsonify({"erro": "Acomodação não encontrada", "id":id}), 404


app.run(port=5000, host='localhost', debug=True)
