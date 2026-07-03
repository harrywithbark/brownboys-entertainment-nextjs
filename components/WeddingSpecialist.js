export default function WeddingSpecialist() {
  return (
    <section id="weddings" className="wedding-specialist section">
      <div className="container">
        <div className="wedding-specialist-grid">
          <div className="wedding-specialist-copy">
            <p className="section-label">The wedding specialists</p>
            <h2 className="section-title section-title--wide">Every moment of your day, scored to perfection</h2>
            <p className="section-subtitle">From the baraat and jaggo night to the reception and late-night afterparty, we plan the energy curve of your celebration alongside your planner — so the floor stays full from the first dance to the last.</p>
            <ul className="wedding-bullets">
              <li>Receptions &amp; dinner ambience</li>
              <li>Jaggo nights &amp; pre-wedding events</li>
              <li>Timed entrances &amp; first dances</li>
              <li>Cultural &amp; multi-generational sets</li>
            </ul>
            <a href="#packages" className="btn btn-primary">Explore Packages</a>
          </div>
          <div className="wedding-specialist-media">
            <img src="/assets/setup-packages.png" alt="BrownBoys Entertainment wedding production setup with DJ booth, lighting and sparklers" loading="lazy" />
            <span className="wedding-specialist-badge">Premium Production</span>
          </div>
        </div>
      </div>
    </section>
  );
}
