
// Compagnie aeree ordinate per anno di fondazione
import { useState } from "react";
import axios from "axios";


const CompagnieOrdinate = () => {
  const [compagnie, setCompagnie] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCompagnie = () => {
    setLoading(true);
    axios
      .get("http://127.0.0.1:5004/query/5")
      .then((response) => setCompagnie(response.data))
      .catch((error) => console.error("Errore nel recupero delle compagnie", error))
      .finally(() => setLoading(false));
  };

  return (
    <div className="container">
      <h1>Compagnie aeree ordinate per anno di fondazione</h1>
      <button onClick={fetchCompagnie} disabled={loading}>
        {loading ? "Caricamento..." : "Carica Compagnie"}
      </button>
      {compagnie.length > 0 ? (
        <ul>
          {compagnie.map((comp, index) => (
            <li key={index}>
              {comp.nome} - Fondata nel {comp.annofondaz}
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>Nessuna compagnia trovata.</p>
      )}
    </div>
  );
};

export default CompagnieOrdinate;
