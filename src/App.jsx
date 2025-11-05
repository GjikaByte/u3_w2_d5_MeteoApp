import React, { useState, useEffect } from "react";
import { Home } from "./pages/Home";
import { HomeEsp } from "./pages/HomeEsp";
import { HomeEn } from "./pages/HomeEn";
import { About } from "./pages/About";
import { AboutEsp } from "./pages/AboutEsp";
import { AboutEn } from "./pages/AboutEn";
import { Services } from "./pages/Services";
import { ServicesEsp } from "./pages/ServicesEsp";
import { ServicesEn } from "./pages/ServicesEn";
import { Contact } from "./pages/Contact";
import { ContactEsp } from "./pages/ContactEsp";
import { ContactEn } from "./pages/ContactEn";
import { Solutions } from "./pages/Solutions";
import { SolutionsEsp } from "./pages/SolutionsEsp";
import { SolutionsEn } from "./pages/SolutionsEn";
import { Privacy } from "./pages/Privacy";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function App() {
  const [route, setRoute] = useState("home");
  const [lang, setLang] = useState("it");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) {
        setRoute(lang === "es" ? "homeEsp" : lang === "en" ? "homeEn" : "home");
      } else {
        setRoute(hash);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [lang]);

  const handleLangChange = (newLang) => {
  setLang(newLang);

  const currentHash = window.location.hash.replace("#", "");

  if (newLang === "es") {
    // If currently on an Italian or English route, map to Spanish equivalent
    if (currentHash.includes("En")) window.location.hash = currentHash.replace("En", "Esp");
    else if (!currentHash.includes("Esp")) window.location.hash = currentHash + "Esp";
  }

  else if (newLang === "en") {
    // If currently on Italian or Spanish, map to English equivalent
    if (currentHash.includes("Esp")) window.location.hash = currentHash.replace("Esp", "En");
    else if (!currentHash.includes("En")) window.location.hash = currentHash + "En";
  }

  else if (newLang === "it") {
    // If coming from Spanish or English, remove suffix
    if (currentHash.includes("Esp")) window.location.hash = currentHash.replace("Esp", "");
    else if (currentHash.includes("En")) window.location.hash = currentHash.replace("En", "");
    else window.location.hash = "home";
  }
};


  return (
    <div className="site">
      <Navbar
        onNavigate={(r) => (window.location.hash = r)}
        onLangChange={handleLangChange}
        currentLang={lang}
      />

      {/* 🇮🇹 ITALIAN */}
      {lang === "it" && (
        <main className="main">
          {route === "home" && <Home />}
          {route === "about" && <About />}
          {route === "services" && <Services />}
          {route === "solutions" && <Solutions />}
          {route === "contact" && <Contact />}
          {route === "privacy" && <Privacy />}
        </main>
      )}

      {/* 🇪🇸 SPANISH */}
      {lang === "es" && (
        <main className="mainEsp">
          {route === "homeEsp" && <HomeEsp />}
          {route === "aboutEsp" && <AboutEsp />}
          {route === "servicesEsp" && <ServicesEsp />}
          {route === "solutionsEsp" && <SolutionsEsp />}
          {route === "contactEsp" && <ContactEsp />}
          {route === "privacy" && <Privacy />}
        </main>
      )}

      {/* 🇬🇧 ENGLISH */}
      {lang === "en" && (
        <main className="mainEn">
          {route === "homeEn" && <HomeEn />}
          {route === "aboutEn" && <AboutEn />}
          {route === "servicesEn" && <ServicesEn />}
          {route === "solutionsEn" && <SolutionsEn />}
          {route === "contactEn" && <ContactEn />}
          {route === "privacy" && <Privacy />}
        </main>
      )}

      <Footer />
    </div>
  );
}
