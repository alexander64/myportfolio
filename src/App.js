import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Team from "./components/Team";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import DropdownMenu from "./components/DropdownMenu";
import "./css/main.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Alterna lo stato
    console.log("Menu toggled:", !isMenuOpen); // Debug dello stato
  };

  return (
    <Router>
      <div className="App">
        {/* Bottone per aprire/chiudere il menu */}
        <button className="floating-menu-button" onClick={toggleMenu}>
          ☰
        </button>

        {/* Componente DropdownMenu */}
        <DropdownMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;