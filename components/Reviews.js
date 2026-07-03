const STAR_PATH = 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z';

function Stars() {
  return (
    <div className="review-stars" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="review-star" viewBox="0 0 24 24"><path d={STAR_PATH} /></svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="reviews reviews-elevated section">
      <div className="container">
        <div className="reviews-elevated-header">
          <p className="section-label">Kind words</p>
          <h2 className="section-title section-title--wide">Loved by couples and families</h2>
        </div>

        <div className="reviews-layout">
          <aside className="reviews-google-panel card">
            <p className="section-label">Client Feedback</p>
            <div className="reviews-score">
              <span className="reviews-number" data-counter="5" data-decimals="1">5.0</span>
              <div className="reviews-stars" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="review-star" viewBox="0 0 24 24"><path d={STAR_PATH} /></svg>
                ))}
              </div>
            </div>
            <p className="reviews-source">Rated on Google · Weddings, Jaggo &amp; events across Greater Vancouver</p>
            <iframe
              className="google-map-embed"
              title="BrownBoys Entertainment on Google Maps"
              src="https://maps.google.com/maps?q=Brownboys+entertainment+Surrey+BC&hl=en&z=13&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
            <div className="reviews-google-actions">
              <a href="https://www.google.com/maps/place/Brownboys+entertainment/@49.1789707,-122.86788,15z" target="_blank" rel="noopener noreferrer" className="btn btn-primary" data-google-reviews="" style={{ width: '100%' }}>
                Read Reviews on Google
              </a>
              <a href="https://www.instagram.com/brownboysentertainment/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '100%', marginTop: 'var(--space-3)' }}>
                Client Feedback on Instagram
              </a>
            </div>
          </aside>

          <div className="reviews-static-grid">
            <article className="review-card">
              <Stars />
              <p className="review-quote">&ldquo;Our dancefloor never emptied once. BrownBoys read the crowd perfectly and the Jaggo night was the talk of the whole wedding week.&rdquo;</p>
              <div className="review-author">
                <div className="review-avatar review-avatar--dark">PA</div>
                <div>
                  <p className="review-name">Priya &amp; Arjun</p>
                  <p className="review-event">Wedding &amp; Jaggo Night · Surrey, BC</p>
                </div>
              </div>
            </article>
            <article className="review-card">
              <Stars />
              <p className="review-quote">&ldquo;From our planning calls to the last song, everything was handled with total professionalism. The low fog first dance shots are framed on our wall.&rdquo;</p>
              <div className="review-author">
                <div className="review-avatar review-avatar--light">BF</div>
                <div>
                  <p className="review-name">The Bains Family</p>
                  <p className="review-event">Engagement Party · Burnaby, BC</p>
                </div>
              </div>
            </article>
            <article className="review-card">
              <Stars />
              <p className="review-quote">&ldquo;Three generations on the floor at the same time. That is the magic — the music flowed and nobody sat down. Worth every penny.&rdquo;</p>
              <div className="review-author">
                <div className="review-avatar review-avatar--gold">HN</div>
                <div>
                  <p className="review-name">Harman &amp; Nav</p>
                  <p className="review-event">Wedding · Richmond, BC</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
