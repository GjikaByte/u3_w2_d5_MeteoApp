import React from "react";
import Logo from "../assets/Logo.png";
import espFlag from "../assets/espFlag.png";
import itFlag from "../assets/itFlag.png";
import ukFlag from "../assets/ukFlag.png";

export const Navbar = ({ onNavigate, onLangChange, currentLang }) => {
  return (
    <>
      {/* 🇮🇹 ITALIAN */}
      {currentLang === "it" && (
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

              <a href="#homeEsp" onClick={(e) => { e.preventDefault(); onLangChange("es"); }}>
                <img src={espFlag} alt="Español" className="lang-flag" />
              </a>
              <a href="#homeEn" onClick={(e) => { e.preventDefault(); onLangChange("en"); }}>
                <img src={ukFlag} alt="English" className="lang-flag" />
              </a>
            </nav>
          </div>
        </header>
      )}

      {/* 🇪🇸 SPANISH */}
      {currentLang === "es" && (
        <header className="nav">
          <div className="nav-inner">
            <div className="brand" onClick={() => onNavigate("homeEsp")}>
              <div className="logo">
                <img src={Logo} alt="Europe Flow logo" />
              </div>
              <div>
                <div className="brand-title">Europe Flow</div>
                <div className="brand-sub">Trading y Consultoría Ambiental</div>
              </div>
            </div>

            <nav className="nav-links">
              <a href="#homeEsp">Inicio</a>
              <a href="#aboutEsp">Quiénes somos</a>
              <a href="#servicesEsp">Servicios</a>
              <a href="#solutionsEsp">Soluciones</a>
              <a href="#contactEsp">Contacto</a>

              <a href="#home" onClick={(e) => { e.preventDefault(); onLangChange("it"); }}>
                <img src={itFlag} alt="Italiano" className="lang-flag" />
              </a>
              <a href="#homeEn" onClick={(e) => { e.preventDefault(); onLangChange("en"); }}>
                <img src={ukFlag} alt="English" className="lang-flag" />
              </a>
            </nav>
          </div>
        </header>
      )}

      {/* 🇬🇧 ENGLISH */}
      {currentLang === "en" && (
        <header className="nav">
          <div className="nav-inner">
            <div className="brand" onClick={() => onNavigate("homeEn")}>
              <div className="logo">
                <img src={Logo} alt="Europe Flow logo" />
              </div>
              <div>
                <div className="brand-title">Europe Flow</div>
                <div className="brand-sub">Trading & Environmental Consulting</div>
              </div>
            </div>

            <nav className="nav-links">
              <a href="#homeEn">Home</a>
              <a href="#aboutEn">About us</a>
              <a href="#servicesEn">Services</a>
              <a href="#solutionsEn">Solutions</a>
              <a href="#contactEn">Contact</a>

              <a href="#home" onClick={(e) => { e.preventDefault(); onLangChange("it"); }}>
                <img src={itFlag} alt="Italiano" className="lang-flag" />
              </a>
              <a href="#homeEsp" onClick={(e) => { e.preventDefault(); onLangChange("es"); }}>
                <img src={espFlag} alt="Español" className="lang-flag" />
              </a>
            </nav>
          </div>
        </header>
      )}
    </>
  );
};
