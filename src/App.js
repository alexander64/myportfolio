import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Team from "./components/Team";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "./css/main.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="App">
        <button className="floating-menu-button" onClick={toggleMenu}>
          ☰
        </button>
        {isMenuOpen && (
          <div className="dropdown-menu">
            <ul>
              <li>
                <Link to="/" onClick={toggleMenu}>Home</Link>
              </li>
              <li>
                <Link to="/team" onClick={toggleMenu}>Team</Link>
              </li>
              <li>
                <Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" onClick={toggleMenu}>Contact</Link>
              </li>
            </ul>
          </div>
        )}
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