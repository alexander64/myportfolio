import React from "react";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>CLOUD COMPUTERS</h1>
          <p>
            Tutto quello di cui ha bisogno la tua attività all'avanguardia!
          </p>
        </div>
      </section>

      {/* Servizi */}
      <section className="services">
        <h2>I nostri servizi</h2>
        <div className="service-list">
          <div className="service-item">
            <h3>Sviluppo Software</h3>
            <p>
              Soluzioni personalizzate per ogni esigenza aziendale.
            </p>
          </div>
          <div className="service-item">
            <h3>Infrastrutture</h3>
            <p>
              In cloud e dentro la tua azienda.
            </p>
          </div>
          <div className="service-item">
            <h3>ARCHITET</h3>
            <p>
              Il tuo strumento di lavoro sempre disponibile sempre performante.
            </p>
          </div>
        </div>
      </section>

      {/* Mission e Valori */}
      <section className="hero">
        <h2>La nostra mission</h2>
        <p>
          Mantenere la tua azienda competitiva in un mercato sempre più digitalizzato attraverso soluzioni su misura per i tuoi processi e le tue esigenze.
        </p>
      </section>

      {/* Team */}
      <section className="team-card">
        <h2>Il nostro team</h2>
        <p>
          Il nostro team è composto da esperti sviluppatori e sistemisti specializzati pronti a trasformare le tue idee in realtà.
        </p>
      </section>

      {/* Contatto */}
      <section className="hero">
        <h2>Contattaci</h2>
        <p>
          Sei interessato ai nostri servizi? <a href="/contact">Contattaci</a> per ulteriori informazioni.
        </p>
      </section>
    </div>
  );
};

export default Home;