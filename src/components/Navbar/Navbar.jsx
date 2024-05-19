import React, { useState } from "react";
import { Menu } from "@mui/icons-material";
import searchIcon from "/assets/images/search.png";
import profileIcon from "/assets/images/profile.png";
import cartIcon from "/assets/images/cart.png";
import "./navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navLinks = [
        { title: "Inicio", path: "/", active: true },
        { title: "Productos", path: "/products", active: false },
        { title: "Contacto", path: "/contact", active: false },
        { title: "Redes Sociales", path: "https://www.instagram.com/gm_providers/", active: false },
    ];

    const cartItemsCount = 5; // Número fijo hardcodeado

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <a href="/" className="navbar-title">G&M_Providers</a>
            <ul className="navbar-links">
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <a href={link.path} className={`navbar-link ${link.active ? 'navbar-link-active' : ''}`}>
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="navbar-icons">
                <img src={searchIcon} alt="search" className="navbar-icon" />
                <img src={profileIcon} alt="profile" className="navbar-icon" />
                <div className="navbar-cart">
                    <img src={cartIcon} alt="cart" className="navbar-icon" />
                    <span className="navbar-cart-badge">{cartItemsCount}</span>
                </div>
                <Menu color="inherit" className="navbar-menu" onClick={toggleMenu} />
            </div>
            {menuOpen && (
                <div className="navbar-dropdown">
                    {navLinks.map((link, index) => (
                        <a key={index} href={link.path} className={`navbar-link ${link.active ? 'navbar-link-active' : ''}`}>
                            {link.title}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
