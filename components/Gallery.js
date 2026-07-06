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
          <div className="gallery-item" data-category="club">
            <div className="gallery-placeholder">
              <div className="gallery-placeholder-inner">
                <svg className="gallery-placeholder-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                <span className="gallery-placeholder-text">Photo coming soon</span>
                <span className="gallery-placeholder-sub">Club Night · Vancouver</span>
              </div>
            </div>
          </div>
          <div className="gallery-item" data-category="jaggo">
            <div className="gallery-placeholder">
              <div className="gallery-placeholder-inner">
                <svg className="gallery-placeholder-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                <span className="gallery-placeholder-text">Photo coming soon</span>
                <span className="gallery-placeholder-sub">Jaggo · Greater Vancouver</span>
              </div>
            </div>
          </div>
          <div className="gallery-item" data-gallery="" data-category="wedding">
            <img src="/assets/dj-hero.png" alt="Wedding reception dancefloor kept full by BrownBoys Entertainment" loading="lazy" />
            <span className="gallery-label">Wedding Reception · Surrey</span>
          </div>
          <div className="gallery-item" data-category="wedding">
            <div className="gallery-placeholder">
              <div className="gallery-placeholder-inner">
                <svg className="gallery-placeholder-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                <span className="gallery-placeholder-text">Photo coming soon</span>
                <span className="gallery-placeholder-sub">Engagement · Vancouver</span>
              </div>
            </div>
          </div>
          <div className="gallery-item" data-category="club">
            <div className="gallery-placeholder">
              <div className="gallery-placeholder-inner">
                <svg className="gallery-placeholder-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                <span className="gallery-placeholder-text">Photo coming soon</span>
                <span className="gallery-placeholder-sub">Private Celebration · Burnaby</span>
              </div>
            </div>
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
