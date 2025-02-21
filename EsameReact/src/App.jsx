import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import AeroportiList from "./AeroportiList"; 
import VoliDurataSuperiore from "./VoliDurataSuperiore.jsx";
import CittaServiteApitalia from "./CittaServiteApitalia";
import VoliOltre500 from "./VoliOltre500.jsx";
import CompagnieOrdinate from "./CompagnieOrdinate.jsx";
import "./App.css";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/voli-oltre-600")}>Voli Oltre 600</button>
      <button onClick={() => navigate("/voli-durata-superiore")}>Voli Durata Superiore</button>
      <button onClick={() => navigate("/citta-servite-apitalia")}>Città Servite Apitalia</button>
      <button onClick={()=> navigate ("/Compagnie-Ordinate")}>Compagnie Ordinate</button>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/Compagnie-Ordinate" element={<CompagnieOrdinate/>}/>
          <Route path="/voli-oltre-600" element={<VoliOltre500 />} />  
          <Route path="/" element={<AeroportiList />} />
          <Route path="/voli-durata-superiore" element={<VoliDurataSuperiore />} />
          <Route path="/citta-servite-apitalia" element={<CittaServiteApitalia />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
