import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import AeroportiList from "./AeroportiList"; 
import VoliDurataSuperiore from "./VoliDurataSuperiore.jsx";
import CittaServiteApitalia from "./CittaServiteApitalia";
import "./App.css";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/add")}>Aggiungi Aeroporto</button>
      <button onClick={() => navigate("/voli-durata-superiore")}>Voli Durata Superiore</button>
      <button onClick={() => navigate("/citta-servite-apitalia")}>Città Servite Apitalia</button>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<AeroportiList />} />
          <Route path="/voli-durata-superiore" element={<VoliDurataSuperiore />} />
          <Route path="/citta-servite-apitalia" element={<CittaServiteApitalia />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
