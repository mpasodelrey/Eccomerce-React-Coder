import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from "@mui/icons-material";
import searchIcon from "/assets/images/search.png";
import cartIcon from "/assets/images/cart.png";
import './navbar.css';

export default function Navbar({ cartItemCount }) {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-title">G&M_Providers</a>
      <ul className="navbar-links">
        <li><Link to="/" className="navbar-link">Inicio</Link></li>
        <li><Link to="/products" className="navbar-link">Productos</Link></li>
        <li><Link to="/contact" className="navbar-link">Contacto</Link></li>
        <li><a href="https://www.instagram.com" className="navbar-link">Redes Sociales</a></li>
      </ul>
      <div className="navbar-icons">
        <img src={searchIcon} alt="search" className="navbar-icon" />
        <Link to="/cart" className="navbar-cart">
          <img src={cartIcon} alt="cart" className="navbar-icon" />
          <span>{cartItemCount}</span>
        </Link>
        <Menu color="inherit" className="navbar-menu" />
      </div>
    </nav>
  );
}
