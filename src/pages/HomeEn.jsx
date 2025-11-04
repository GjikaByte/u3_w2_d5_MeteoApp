// pages/HomeEn.jsx
import React from "react";

export const HomeEn = () => {
  return (
    <section className="page home">
      <div className="hero">
        <div className="hero-text">
          <h1>Trading and consultancy for the energy transition</h1>
          <p>
            We operate in the markets of environmental commodities and
            energy-transition instruments, providing trading, brokerage, and
            liquidity services for carbon credits, EACs, PPAs/GPAs, biomethane,
            and more.
          </p>
          <div className="cta-row">
            <a className="btn primary" href="#servicesEn">Discover our services</a>
            <a className="btn ghost" href="#contactEn">Contact us</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="card">
            <h4>Tailored Solutions</h4>
            <p>Market intelligence, portfolio management, and strategic support for energy transition projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
