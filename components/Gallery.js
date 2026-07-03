export default function Gallery() {
  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <div className="section-intro section-intro--left">
          <p className="section-label">On the floor</p>
          <h2 className="section-title">Real nights, real energy</h2>
          <p className="section-subtitle">A glimpse of the celebrations, dancefloors and showstopper moments we create across Greater Vancouver.</p>
        </div>

        <div className="gallery-filters" role="tablist" aria-label="Filter gallery">
          <button type="button" className="gallery-filter active" data-filter="all" role="tab" aria-selected="true">All</button>
          <button type="button" className="gallery-filter" data-filter="production" role="tab" aria-selected="false">Production</button>
          <button type="button" className="gallery-filter" data-filter="wedding" role="tab" aria-selected="false">Weddings</button>
          <button type="button" className="gallery-filter" data-filter="jaggo" role="tab" aria-selected="false">Jaggo</button>
          <button type="button" className="gallery-filter" data-filter="club" role="tab" aria-selected="false">Club</button>
        </div>

        <div className="gallery-grid">
          <div className="gallery-item gallery-item-large" data-gallery="" data-category="production">
            <img src="/assets/setup-packages.png" alt="BrownBoys Entertainment premium DJ booth with sparklers and low fog" loading="lazy" />
            <span className="gallery-label">Premium Production · Surrey, BC</span>
          </div>
          <div className="gallery-item" data-gallery="" data-category="club">
            <img src="/assets/placeholder-event.svg" alt="Club night event — BrownBoys Entertainment live DJ set" loading="lazy" />
            <span className="gallery-label">Club Night · Vancouver</span>
          </div>
          <div className="gallery-item" data-gallery="" data-category="jaggo">
            <img src="/assets/placeholder-event.svg" alt="Jaggo night celebration with dhol and crowd energy" loading="lazy" />
            <span className="gallery-label">Jaggo · Greater Vancouver</span>
          </div>
          <div className="gallery-item" data-gallery="" data-category="wedding">
            <img src="/assets/dj-hero.png" alt="Wedding reception dancefloor kept full by BrownBoys Entertainment" loading="lazy" />
            <span className="gallery-label">Wedding Reception · Surrey</span>
          </div>
          <div className="gallery-item" data-gallery="" data-category="wedding">
            <img src="/assets/placeholder-event.svg" alt="Engagement party with lighting and production" loading="lazy" />
            <span className="gallery-label">Engagement · Vancouver</span>
          </div>
          <div className="gallery-item" data-gallery="" data-category="club">
            <img src="/assets/placeholder-event.svg" alt="Live DJ set at a private celebration" loading="lazy" />
            <span className="gallery-label">Private Celebration · Burnaby</span>
          </div>
        </div>

        <div className="gallery-cta">
          <a href="https://www.instagram.com/brownboysentertainment/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 'var(--space-2)' }}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            View Full Gallery on Instagram
          </a>
        </div>
      </div>

      {/* Lightbox */}
      <div id="gallery-lightbox" className="gallery-lightbox" hidden>
        <button type="button" className="gallery-lightbox-close" aria-label="Close gallery">&times;</button>
        <figure className="gallery-lightbox-figure">
          <img className="gallery-lightbox-img" alt="" />
          <figcaption className="gallery-lightbox-caption"></figcaption>
        </figure>
      </div>
    </section>
  );
}
