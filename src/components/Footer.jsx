import React from "react";

export const Footer = () => (
  <footer className="footer">
    <div className="wrap">
      <div>© {new Date().getFullYear()} Europe Flow — Tutti i diritti riservati</div>
      <div> VAT Number: 25110516081459589</div>
      <div className="footer-links">
        <a href="#privacy">Privacy</a>
        <a href="#contact">Contatti</a>
      </div>
    </div>
  </footer>
);
