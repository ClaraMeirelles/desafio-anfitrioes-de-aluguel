# Crie uma API REST que disponibilize dados fictícios de acomodações. A API deve ter os seguintes
# endpoints:


from flask import Flask, jsonify, request
from flask_cors import CORS  
import json
app = Flask(__name__)
CORS(app) 

def get_accommodation():
    with open("accommodations.json", "r", encoding="utf-8") as file:
        return json.load(file)
    
# ● GET /acomodacoes → Retorna uma lista de acomodações
# ● GET /acomodacoes?cidade=Florianópolis → Filtra acomodações por cidade
@app.route('/acomodacoes', methods=['GET'])
def accommodation_list():
    accommodations = get_accommodation()
    cidade = request.args.get('cidade')  # Captura o parâmetro opcional da query string
    print(cidade)

    if not cidade:
        return jsonify(accommodations)
    else:
        cidade = cidade.lower()
        filtered_accommodations = [
            acc for acc in accommodations if cidade in acc["localizacao"].lower()
        ]

        return jsonify(filtered_accommodations)


# ● GET /acomodacoes/{id} → Retorna detalhes de uma acomodação específica

@app.route('/acomodacoes/<int:id>', methods=['GET'])
def acomodacao_detalhe(id):
    accommodations = get_accommodation()
    for accomodation in accommodations:
        if accomodation.get('id') == id:
            return jsonify(accomodation)


app.run(port=5000, host='localhost', debug=True)