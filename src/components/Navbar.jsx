import React from "react";
import Logo from "../assets/Logo.png";

export const Navbar = ({ onNavigate }) => {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand" onClick={() => onNavigate("home")}>
          <div className="logo">
            <img src={Logo} alt="Europe Flow logo" />
          </div>
          <div>
            <div className="brand-title">Europe Flow</div>
            <div className="brand-sub">Trading & Consulenza Ambientale</div>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">Chi siamo</a>
          <a href="#services">Servizi</a>
          <a href="#solutions">Soluzioni</a>
          <a href="#contact">Contatti</a>
        </nav>
      </div>
    </header>
  );
};
