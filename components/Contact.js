const WA_SVG_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.895c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.895 0-3.171-1.235-6.152-3.476-8.397z';

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-final-header">
          <p className="section-label text-center">Book BrownBoys</p>
          <h2 className="section-title text-center">Let&apos;s make your celebration unforgettable</h2>
          <p className="section-subtitle text-center text-muted" style={{ margin: '0 auto' }}>Share your date and vision — we&apos;ll craft a tailored entertainment package and reply within 24 hours.</p>
          <div className="contact-final-cta">
            <a href="https://wa.me/12505520634?text=Hi%20BrownBoys%20Entertainment!%20I%27d%20like%20to%20check%20availability%20for%20my%20event." target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">Book Your Event</a>
            <a href="#services" className="btn btn-secondary btn-lg">View Services</a>
          </div>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-label">Phone / WhatsApp</span>
              <a href="tel:+12505520634" className="contact-value">+1 (250) 552-0634</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">WhatsApp</span>
              <a href="https://wa.me/12505520634?text=Hi%20BrownBoys%20Entertainment!%20I%27d%20like%20to%20book%20a%20DJ%20for%20my%20event." target="_blank" rel="noopener noreferrer" className="contact-value">Message us directly</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Instagram</span>
              <a href="https://www.instagram.com/brownboysentertainment/" target="_blank" rel="noopener noreferrer" className="contact-value">@brownboysentertainment</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Google</span>
              <a href="https://www.google.com/maps/place/Brownboys+entertainment/@49.1789707,-122.86788,15z" target="_blank" rel="noopener noreferrer" className="contact-value">View on Google Maps</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Location</span>
              <span className="contact-value">Surrey, BC · Greater Vancouver</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Response Time</span>
              <span className="contact-value">Usually within a few hours</span>
            </div>

            <div className="contact-availability">
              <div className="contact-badge">
                <p className="contact-badge-text">Now Booking 2026</p>
                <p className="contact-badge-sub">Based in Surrey, BC — serving Greater Vancouver and available worldwide for destination events.</p>
                <a href="https://wa.me/12505520634?text=Hi%20BrownBoys%20Entertainment!%20I%27d%20like%20to%20check%20availability%20for%20my%20event." target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: 'var(--space-6)', width: '100%' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: 'var(--space-2)' }}><path d={WA_SVG_PATH}/></svg>
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" id="booking-form" action="" method="POST">
              <div className="form-progress">
                <div className="form-progress-bar"><div className="form-progress-fill" id="progressFill"></div></div>
                <div className="form-progress-steps">
                  <span className="form-progress-step active" data-step="1">1</span>
                  <span className="form-progress-step" data-step="2">2</span>
                  <span className="form-progress-step" data-step="3">3</span>
                </div>
              </div>

              <div className="form-step active" data-step="1">
                <h4 className="form-step-title">Event Basics</h4>
                <div className="form-group">
                  <label htmlFor="event-type" className="form-label">Event Type *</label>
                  <select id="event-type" name="event_type" className="form-select" required defaultValue="">
                    <option value="" disabled>Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="jaggo">Jaggo / Engagement</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday</option>
                    <option value="private">Private Party</option>
                    <option value="club">Club / Festival</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="event-date" className="form-label">Event Date</label>
                  <input type="date" id="event-date" name="event_date" className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="guest-count" className="form-label">Guest Count</label>
                  <select id="guest-count" name="guest_count" className="form-select" defaultValue="">
                    <option value="" disabled>Select range</option>
                    <option value="under-50">Under 50</option>
                    <option value="50-150">50-150</option>
                    <option value="150-300">150-300</option>
                    <option value="300+">300+</option>
                  </select>
                </div>
                <button type="button" className="btn btn-primary form-next-btn">Next</button>
              </div>

              <div className="form-step" data-step="2">
                <h4 className="form-step-title">Contact Info</h4>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input type="text" id="name" name="name" className="form-input" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input type="email" id="email" name="email" className="form-input" placeholder="you@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="form-input" placeholder="+1 (250) 552-0634" />
                </div>
                <div className="form-buttons">
                  <button type="button" className="btn btn-secondary form-prev-btn">Back</button>
                  <button type="button" className="btn btn-primary form-next-btn">Next</button>
                </div>
              </div>

              <div className="form-step" data-step="3">
                <h4 className="form-step-title">Event Details</h4>
                <div className="form-group">
                  <label htmlFor="venue" className="form-label">Venue / Location</label>
                  <input type="text" id="venue" name="venue" className="form-input" placeholder="City, venue name, or address" />
                </div>
                <div className="form-group">
                  <label htmlFor="package-interest" className="form-label">Package Interest</label>
                  <select id="package-interest" name="package_interest" className="form-select" defaultValue="">
                    <option value="" disabled>Select a package</option>
                    <option value="basic">Basic</option>
                    <option value="premium">Premium</option>
                    <option value="luxury">Luxury</option>
                    <option value="custom">Custom / Not Sure</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Tell Us About Your Event *</label>
                  <textarea id="message" name="message" className="form-textarea" rows="5" placeholder="Share your vision, music preferences, special requests, or any questions you have..." required></textarea>
                </div>
                <div className="form-buttons">
                  <button type="button" className="btn btn-secondary form-prev-btn">Back</button>
                  <button type="submit" className="btn btn-primary">Request a Quote</button>
                </div>
              </div>
            </form>

            <div className="form-success" id="form-success" style={{ display: 'none' }}>
              <div className="form-success-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3 className="form-success-title">Opening WhatsApp…</h3>
              <p className="form-success-text">Your event details have been prepared in WhatsApp. Send the message to complete your quote request — we usually reply within a few hours.</p>
              <p className="form-success-text">Want a faster response? <a href="https://wa.me/12505520634?text=Hi%20BrownBoys!%20I%20just%20submitted%20the%20booking%20form." target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a>.</p>
              <a href="/" className="btn btn-secondary" style={{ marginTop: 'var(--space-6)' }}>Back to Home</a>
            </div>
          </div>
        </div>
      </div>

      <div className="location-strip">
        <p className="location-text">Based in Surrey, BC · Serving Greater Vancouver &amp; worldwide</p>
      </div>
    </section>
  );
}
