import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
      <ul>
        <li>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/team" onClick={toggleMenu}>
            Team
          </Link>
        </li>
        <li>
          <Link to="/portfolio" onClick={toggleMenu}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;