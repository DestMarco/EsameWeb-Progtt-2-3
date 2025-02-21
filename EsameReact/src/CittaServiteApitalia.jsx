import { useState } from "react";
import axios from "axios";
import "./CittaServiteApitalia.css"; // Importa il file CSS per gli stili

const CittaServiteApitalia = () => {
  const [citta, setCitta] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCitta = () => {
    setLoading(true);

    axios
      .get("http://127.0.0.1:5004/query/3")
      .then((response) => setCitta(response.data))
      .catch((error) => console.error("Errore nel recupero delle città", error))
      .finally(() => setLoading(false));
  };

  return (
    <div className="container">
      <h1 className="title">Città Servite da Apitalia</h1>

      {/* Bottone per caricare le città */}
      <button onClick={fetchCitta} className="load-button" disabled={loading}>
        {loading ? "Caricamento in corso..." : "Carica Città"}
      </button>

      {/* Lista delle città */}
      {citta.length > 0 ? (
        <div className="city-list">
          <h2 className="list-title">Elenco delle città</h2>
          <ul>
            {citta.map((city, index) => (
              <li key={index} className="city-item">
                {city}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        !loading && <p className="no-data">Nessuna città disponibile al momento.</p>
      )}
    </div>
  );
};

export default CittaServiteApitalia;
