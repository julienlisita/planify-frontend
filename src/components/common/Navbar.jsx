import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/components.css"

const NavBar = () => (
  <nav className="flex space-x-12">
      <Link to="/" className="navbar-link">ACCUEIL</Link>
      <Link to="/categories" className="navbar-link">RECETTES</Link>
      <Link to="/user/planning" className="navbar-link">PLANIFIER</Link>
      <Link to="/articles" className="navbar-link">ACTUS</Link>
  </nav>
);

export default NavBar;