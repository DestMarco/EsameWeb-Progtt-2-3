import { useState, useEffect } from "react";
import axios from "axios";

const AeroportiList = () => {
  const [aeroporti, setAeroporti] = useState([]);

  
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5004/query/1")  
      .then((response) => setAeroporti(response.data))
      .catch((error) => console.error("Errore nel recupero degli aeroporti", error));
  }, []);  
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
