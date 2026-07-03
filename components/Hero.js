export default function Hero() {
  return (
    <section className="hero hero--premium">
      <div className="hero-bg">
        <video className="hero-video" autoPlay muted loop playsInline poster="/assets/dj-hero.png">
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
        <img className="hero-image" src="/assets/dj-hero.png" alt="BrownBoys Entertainment DJ performing" loading="lazy" />
        <div className="hero-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <h1 className="hero-display">Brown<span>Boys</span></h1>
          <p className="hero-tagline hero-headline-tagline">Premium DJ &amp; event production.</p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary btn-lg">Book Now</a>
            <a href="#services" className="btn btn-secondary btn-lg">Services</a>
          </div>
        </div>
      </div>
      <span className="hero-scroll-hint" aria-hidden="true">Scroll</span>
    </section>
  );
}
