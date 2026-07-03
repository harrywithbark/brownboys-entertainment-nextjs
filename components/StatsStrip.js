export default function StatsStrip() {
  return (
    <section className="stats-strip" aria-label="Highlights">
      <div className="container">
        <div className="stats-strip-inner">
          <div className="stats-strip-item">
            <div className="stats-strip-value" data-counter="500" data-suffix="+">500+</div>
            <div className="stats-strip-label">Events Delivered</div>
          </div>
          <div className="stats-strip-item">
            <div className="stats-strip-value" data-counter="5" data-decimals="1">5.0</div>
            <div className="stats-strip-label">Google Rating</div>
          </div>
          <div className="stats-strip-item">
            <div className="stats-strip-value" data-counter="12" data-suffix=" yrs">12 yrs</div>
            <div className="stats-strip-label">On The Decks</div>
          </div>
          <div className="stats-strip-item">
            <div className="stats-strip-value" data-counter="100" data-suffix="%">100%</div>
            <div className="stats-strip-label">Dancefloors Filled</div>
          </div>
        </div>
      </div>
    </section>
  );
}
