const faqItems = [
  { question: 'How far in advance should I book?', answer: 'For weddings and major events, we recommend booking 3-6 months in advance to secure your date. For smaller events and parties, 4-6 weeks notice is typically sufficient. Peak season (May-October and December) fills quickly, so earlier is always better. Last-minute bookings are possible depending on availability — just reach out and we\'ll let you know.' },
  { question: 'Do you travel for destination events?', answer: 'Absolutely. We\'re available worldwide for destination weddings, international corporate events, and travel requests. We\'ve performed across North America, Europe, and the Caribbean. Travel costs are calculated based on distance, accommodation needs, and equipment logistics. Contact us with your location details for a custom quote that includes all travel expenses.' },
  { question: 'What does setup involve, and how early do you arrive?', answer: 'We arrive 2-4 hours before your event to set up all equipment. Setup time is included in package pricing — no hidden fees. We handle every technical aspect: sound checks, lighting placement, safety checks, and cable management. The venue receives a clean, professional setup. For larger events with LED walls or complex lighting, we may arrive the day before for pre-configuration.' },
  { question: 'Can I request specific songs or create a playlist?', answer: 'Yes — we encourage it! During your consultation, we\'ll build a must-play list and a do-not-play list together. You can also share Spotify playlists or general vibe preferences. During the event, live requests are welcome and seamlessly incorporated. We read the crowd energy and adjust in real-time, so your custom picks enhance the flow rather than disrupt it.' },
  { question: 'What payment methods do you accept?', answer: 'We accept bank transfers, all major credit cards, Venmo, PayPal, and cash. A 30% deposit is required to secure your date, with the remaining balance due 14 days before the event. For larger events, payment plans are available — just mention it during your consultation and we\'ll structure something that works for you.' },
  { question: 'What happens if the DJ gets sick or can\'t make it?', answer: 'We have a roster of backup DJs who are fully briefed on your event details and can step in seamlessly. For every booking, we prepare a comprehensive event brief including playlist notes, timeline, and special requests. In twelve years, we\'ve never had to use it — but we plan for everything so you never have to worry.' },
  { question: 'Do you provide equipment, or do we need to rent separately?', answer: 'All our packages include professional-grade equipment — sound systems, lighting, microphones, and effects. You never need to rent separately unless you have specific equipment preferences. For exceptionally large venues (2,000+ guests), we may recommend additional subwoofers or satellite speakers, which we can source and include in your quote.' },
  { question: 'Can I see you perform before booking?', answer: 'If we have upcoming public events, we\'ll share where we\'ll be performing so you can experience our style firsthand. For private events, we provide video footage of past performances demonstrating our mixing technique, crowd interaction, and overall energy. We\'re also happy to schedule a video call where we can discuss your vision and show you samples of our work.' },
];

export default function FAQ() {
  return (
    <section id="faq" className="faq section">
      <div className="container">
        <div className="faq-grid">
          <div className="faq-intro">
            <p className="section-label">Questions</p>
            <h2 className="section-title">Frequently Asked</h2>
            <p className="text-muted">Everything you need to know before booking. Don&apos;t see your question? Reach out directly — we respond within 24 hours.</p>
            <a href="#contact" className="btn btn-primary" style={{ marginTop: 'var(--space-6)' }}>Ask Us Anything</a>
          </div>

          <div className="faq-questions accordion">
            {faqItems.map((item, i) => (
              <div key={i} className={`accordion-item${i === 0 ? ' active' : ''}`}>
                <button className="accordion-header" aria-expanded={i === 0 ? 'true' : 'false'}>
                  <span className="accordion-title">{item.question}</span>
                  <span className="accordion-icon">+</span>
                </button>
                <div className="accordion-content">
                  <div className="accordion-body">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
