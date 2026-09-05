function Globe() {
  return (
    <svg className="globe" viewBox="0 0 520 520" fill="none" aria-hidden="true">
      <circle cx="260" cy="260" r="222" stroke="currentColor" opacity=".12" />
      <circle cx="260" cy="260" r="192" stroke="currentColor" opacity=".2" strokeDasharray="2 8" />
      <g transform="rotate(-22 260 260)" stroke="currentColor" strokeWidth="1.4">
        <circle cx="260" cy="260" r="158" />
        <ellipse cx="260" cy="260" rx="85" ry="158" />
        <ellipse cx="260" cy="260" rx="30" ry="158" opacity=".5" />
        <ellipse cx="260" cy="260" rx="158" ry="57" />
        <path d="M119 189h282M119 331h282M102 260h316M260 102v316" opacity=".5" />
      </g>
      <circle cx="188" cy="169" r="8" fill="#e18b66" stroke="#f2f6ee" strokeWidth="5" />
      <circle cx="385" cy="259" r="8" fill="#e18b66" stroke="#f2f6ee" strokeWidth="5" />
      <circle cx="233" cy="384" r="8" fill="#e18b66" stroke="#f2f6ee" strokeWidth="5" />
      <path d="M397 97v24m-12-12h24M112 362v18m-9-9h18" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="university"><span className="university-name">TOR VERGATA</span><span className="university-detail">Università degli Studi di Roma</span></div>
        <span className="header-label">Formazione post-laurea</span>
      </header>
      <main>
        <section className="hero" aria-labelledby="page-title">
          <div className="hero-copy">
            <div className="status"><span className="status-dot" /> Sito in preparazione</div>
            <p className="eyebrow">CORSI DI PERFEZIONAMENTO</p>
            <h1 id="page-title">Salute pediatrica.<br /><em>Prospettiva globale.</em></h1>
            <p className="intro">Stiamo preparando il nuovo sito dei corsi di perfezionamento dell’Università degli Studi di Roma Tor Vergata dedicati alla salute pediatrica a livello globale.</p>
            <div className="audience"><span>Per medici</span><span>Per infermieri</span></div>
            <div className="progress-note"><span className="note-line" /><p><strong>Work in progress</strong><br />Presto qui troverai tutte le informazioni sui corsi.</p></div>
          </div>
          <div className="hero-art"><Globe /><div className="art-caption"><span>Conoscenza, cura, connessioni.</span><span>Oltre i confini.</span></div></div>
        </section>
        <section className="themes" aria-label="La nostra prospettiva">
          <div><span className="theme-index">01</span><span>Formazione</span></div>
          <div><span className="theme-index">02</span><span>Salute pediatrica</span></div>
          <div><span className="theme-index">03</span><span>Dimensione globale</span></div>
        </section>
      </main>
      <footer><span>Salute Pediatrica Globale</span><span>Tor Vergata · Roma</span></footer>
    </div>
  );
}
