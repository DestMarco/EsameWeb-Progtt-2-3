import { useState } from "react";
import axios from "axios";
import "./VoliDurataSuperiore.css"; // Importa il file CSS


const VoliOltre500 = () => {
  const [voli, setVoli] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchVoli = () => {
    setLoading(true);

    axios
      .get("http://127.0.0.1:5004/query/4")
      .then((response) => setVoli(response.data))
      .catch((error) => console.error("Errore nel recupero dei voli", error))
      .finally(() => setLoading(false));
  };

  return (
    <div className="container">
      <h1 className="title">Voli sopra ai 600 minuti di Durata</h1>

      {/* Bottone per caricare i dati */}
      <button onClick={fetchVoli} className="load-button" disabled={loading}>
        {loading ? "Caricamento..." : "Carica Voli"}
      </button>

      {/* Tabella o messaggio di assenza dati */}
      
      {voli.length > 0 ? (
        <table className="voli-table">
          <thead>
            <tr>
              <th>Codice</th>
              <th>Compagnia</th>
              <th>Durata (minuti)</th>
            </tr>
          </thead>
          <tbody>
            {voli.map((volo, index) => (
              <tr key={index}>
                <td>{volo.codice}</td>
                <td>{volo.comp}</td>
                <td>{volo.durataMinuti}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !loading && <p className="no-data">Nessun volo disponibile al momento.</p>
      )}
    </div>
  );
};
export default VoliOltre500;