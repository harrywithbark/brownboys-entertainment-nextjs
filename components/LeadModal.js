export default function LeadModal() {
  return (
    <div id="lead-modal" className="lead-modal" role="dialog" aria-hidden="true" aria-modal="true">
      <div className="modal-content glass-panel">
        <div className="modal-header">
          <h3>Request a custom quote</h3>
          <button className="lead-modal-close" aria-label="Close modal">&#x2715;</button>
        </div>
        <div className="modal-body">
          <form id="lead-form">
            <input type="hidden" name="package_interest" defaultValue="" />
            <div className="form-row">
              <input type="text" name="name" placeholder="Your name" required />
              <input type="tel" name="phone" placeholder="Phone number" required />
            </div>
            <div className="form-row">
              <input type="email" name="email" placeholder="Email address" />
              <input type="text" name="event_type" placeholder="Event type (wedding, Jaggo, club...)" />
            </div>
            <div>
              <textarea name="message" placeholder="Tell us your date, venue, and questions"></textarea>
            </div>
            <div className="modal-actions">
              <button type="button" className="lead-modal-cancel">Cancel</button>
              <button type="submit" className="btn btn-primary">Send to WhatsApp</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
