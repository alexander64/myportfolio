import React from "react";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Benvenuti in DevCompany</h1>
          <p>
            Siamo specializzati nella creazione di soluzioni tecnologiche innovative per aziende e professionisti.
          </p>
        </div>
      </section>

      {/* Servizi */}
      <section className="services">
        <h2>I nostri servizi</h2>
        <div className="service-list">
          <div className="service-item">
            <h3>Sviluppo Software</h3>
            <p>Soluzioni personalizzate per ogni esigenza aziendale.</p>
          </div>
          <div className="service-item">
            <h3>Automazione dei Processi</h3>
            <p>
              Implementazione di tecnologie avanzate per migliorare l'efficienza.
            </p>
          </div>
          <div className="service-item">
            <h3>Analisi Dati</h3>
            <p>
              Trasformiamo i dati in informazioni strategiche per il tuo business.
            </p>
          </div>
        </div>
      </section>

      {/* Mission e Valori */}
      <section className="mission">
        <h2>La nostra missione</h2>
        <p>
          Supportare aziende e professionisti nella digitalizzazione e ottimizzazione dei processi,
          offrendo soluzioni innovative e su misura.
        </p>
      </section>

      {/* Team */}
      <section className="team">
        <h2>Il nostro team</h2>
        <p>
          Il nostro team è composto da esperti in vari settori tecnologici,
          pronti a trasformare le tue idee in realtà.
        </p>
      </section>

      {/* Contatto */}
      <section className="contact">
        <h2>Contattaci</h2>
        <p>
          Sei interessato ai nostri servizi? <a href="/contact">Contattaci</a> per ulteriori informazioni.
        </p>
      </section>
    </div>
  );
};

export default Home;