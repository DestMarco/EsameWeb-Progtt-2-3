import json
import os
from flask import Flask, jsonify  # type: ignore
from flask_cors import CORS  # type: ignore

app = Flask(__name__)
CORS(app)

# Caricamento dati JSON

def load_fake_db():
    try:
        json_file_path = '/home/user/EsameWeb-Progtt-2-3/Sercilo_Db/db.json'
        with open(json_file_path, 'r', encoding='utf-8') as file:
            db_data = json.load(file)
            if isinstance(db_data, dict):
                return db_data
            else:
                return {"error": "Il contenuto del file JSON non è un dizionario valido."}
    except Exception as e:
        return {"error": f"Errore nel caricamento dei dati: {str(e)}"}

@app.route('/query/<int:query_id>', methods=['GET'])
def run_query(query_id):
    """Execute predefined queries based on the query_id."""
    try:
        data = load_fake_db()
        if "error" in data:
            return jsonify(data), 500

        if query_id == 1:
            return jsonify(data["Aeroporto"])
        elif query_id == 2:
            voli = data["Volo"]
            durata_media = {}
            for volo in voli:
                comp = volo["comp"]
                durata_media.setdefault(comp, []).append(int(volo["durataMinuti"]))
            durata_media = {comp: sum(durata) / len(durata) for comp, durata in durata_media.items()}
            risultati = [volo for volo in voli if int(volo["durataMinuti"]) > durata_media[volo["comp"]]]
            return jsonify(risultati)
        elif query_id == 3:
            aeroporti_apitalia = {ap["partenza"] for ap in data["ArrPart"] if ap["comp"] == "Apitalia"} | {ap["arrivo"] for ap in data["ArrPart"] if ap["comp"] == "Apitalia"}
            citta_count = {}
            for luogo in data["LuogoAeroporto"]:
                if luogo["aeroporto"] in aeroporti_apitalia:
                    citta_count[luogo["citta"]] = citta_count.get(luogo["citta"], 0) + 1
            risultati = [citta for citta, count in citta_count.items() if count > 1]
             #risultati = [("Roma", "Italia")]
            return jsonify(risultati)
        elif query_id == 4:
            risultati = [volo for volo in data["Volo"] if int(volo.get("durataMinuti", 0)) > 600]
            return jsonify(risultati)
        elif query_id == 5:
            risultati = sorted(
                (c for c in data["Compagnia"] if c.get("annofondaz")),
                key=lambda x: int(x["annofondaz"])
            )
            return jsonify(risultati)
        else:
            return jsonify({"error": "Invalid query ID"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Nuovo endpoint per ottenere tutti gli aeroporti
@app.route('/query/aeroporti', methods=['GET'])
def get_aeroporti():
    """Retrieve all airports from the JSON data."""
    try:
        data = load_fake_db()
        if "error" in data:
            return jsonify(data), 500
        aeroporti = [{"codice": a["codice"], "nome": a["nome"]} for a in data["Aeroporto"]]
        return jsonify(aeroporti)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.errorhandler(404)
def not_found_error(error):
    return jsonify({"error": "Risorsa non trovata"}), 404

@app.errorhandler(500)
def internal_server_error(error):
    return jsonify({"error": "Errore interno del server"}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5004)
