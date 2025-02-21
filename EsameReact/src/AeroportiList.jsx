import { useState, useEffect } from "react";
import axios from "axios";

const AeroportiList = () => {
  const [aeroporti, setAeroporti] = useState([]);

  // Effettua la richiesta per ottenere gli aeroporti al caricamento della pagina
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5002/query/1")  // Richiesta GET per ottenere tutti gli aeroporti
      .then((response) => setAeroporti(response.data))
      .catch((error) => console.error("Errore nel recupero degli aeroporti", error));
  }, []);  // Esegui una sola volta al caricamento del componente

  return (
    <div>
      <h1>Lista degli Aeroporti</h1>
      <ul>
        {aeroporti.map((aeroporto) => (
          <li key={aeroporto.codice}>
            {aeroporto.codice} - {aeroporto.nome} - {aeroporto.citta}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AeroportiList;
