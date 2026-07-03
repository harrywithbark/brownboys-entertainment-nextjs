import Link from 'next/link';
import LeadModal from '@/components/LeadModal';

export const metadata = {
  title: 'Basic Package | BrownBoys Entertainment',
  description: 'Basic DJ Package from BrownBoys Entertainment - Perfect for small gatherings and private parties. Contact for pricing.',
};

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
);

const PersonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);

export default function BasicPage() {
  return (
    <main id="main">
      <header className="page-header">
        <div className="page-header-bg"></div>
        <div className="container page-header-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link href="/#packages">Packages</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Basic</span>
          </div>
          <p className="section-label">DJ Package</p>
          <h1>Basic Package</h1>
          <p>Professional DJ services for small gatherings, house parties, and intimate celebrations. Quality sound and lighting without the premium price tag.</p>
        </div>
      </header>

      <section className="package-detail">
        <div className="container package-detail-grid">
          <div className="package-detail-main">
            <div className="package-detail-section">
              <h3>What&apos;s Included</h3>
              <div className="feature-list">
                {['Professional DJ performance tailored to your event','Professional Sound System suitable for up to 100 guests','Basic LED Lighting Setup with wash and ambient effects','Song Requests Welcome — build your vibe in real time','MC Services Included for announcements and crowd engagement','Wireless Microphone for speeches, toasts, and shoutouts','Pre-Event Consultation to discuss music style and timeline','Professional Setup & Breakdown included — no extra fees'].map((f,i) => (
                  <div key={i} className="feature-list-item"><CheckIcon /><span>{f}</span></div>
                ))}
              </div>
            </div>

            <div className="package-detail-section">
              <h3>Available Add-Ons</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {[
                  { title: 'Extra Hour', desc: 'Extend your event with an additional hour of DJ performance.' },
                  { title: 'Upgraded Lighting', desc: 'Intelligent moving-head lights and atmospheric effects.' },
                  { title: 'Additional Wireless Mic', desc: 'Extra handheld mic for duets, interviews, or panel events.' },
                  { title: 'Custom Playlist Curation', desc: 'Pre-built playlist crafted specifically for your event and guests.' },
                ].map((a,i) => (
                  <div key={i} className="addon-card">
                    <div className="addon-info"><p className="addon-title">{a.title}</p><p className="addon-desc">{a.desc}</p></div>
                    <span className="addon-price">Contact for pricing</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="package-detail-section">
              <h3>Ideal For</h3>
              <div className="ideal-tags">
                {['Birthday Parties','House Parties','Small Gatherings','Backyard Events','Graduation Celebrations'].map((t,i) => (
                  <span key={i} className="ideal-tag"><PersonIcon />{t}</span>
                ))}
              </div>
            </div>

            <div className="package-detail-section">
              <h3>Compare All Packages</h3>
              <table className="comparison-table">
                <thead><tr><th>Feature</th><th>Basic</th><th><Link href="/premium">Premium</Link></th><th><Link href="/luxury">Luxury</Link></th></tr></thead>
                <tbody>
                  <tr><td>DJ Coverage</td><td className="comparison-check">Tailored</td><td>Tailored</td><td>Tailored</td></tr>
                  <tr><td>Sound System</td><td className="comparison-check">Professional</td><td>Premium</td><td>Top-Tier + Sub</td></tr>
                  <tr><td>Lighting</td><td className="comparison-check">Basic LED</td><td>Intelligent FX</td><td>Full Light Show</td></tr>
                  <tr><td>MC Services</td><td className="comparison-check">Included</td><td>Professional</td><td>Dedicated</td></tr>
                  <tr><td>Custom Playlist</td><td className="comparison-cross">Not included</td><td>Included</td><td>Full Planning</td></tr>
                  <tr><td>Dance Floor Lighting</td><td className="comparison-cross">Not included</td><td>Included</td><td>Advanced</td></tr>
                  <tr><td>LED Wall / Visuals</td><td className="comparison-cross">Not included</td><td className="comparison-cross">Not included</td><td>Included</td></tr>
                  <tr><td>Event Coordinator</td><td className="comparison-cross">Not included</td><td className="comparison-cross">Not included</td><td>Included</td></tr>
                  <tr><td>Photo Booth</td><td className="comparison-cross">Not included</td><td className="comparison-cross">Not included</td><td>Optional</td></tr>
                  <tr><td>Pricing</td><td className="comparison-check">Contact</td><td>Contact</td><td>Contact</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <aside className="package-detail-sidebar">
            <div className="sidebar-card">
              <div className="sidebar-price">Contact for pricing</div>
              <p className="sidebar-price-note">We provide custom quotes based on venue, guest count, and add-ons — contact us to discuss.</p>
              <div className="sidebar-features">
                {['DJ set (timing tailored to event)','Professional Sound','Basic LED Lighting','MC Services','Wireless Mic','Setup & Breakdown'].map((f,i) => (
                  <div key={i} className="sidebar-feature"><CheckIcon />{f}</div>
                ))}
              </div>
              <button type="button" className="btn btn-primary btn-lg open-quote-modal" data-package="Basic" style={{ width: '100%' }}>Get a Custom Quote</button>
              <a href="https://wa.me/12505520634" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%', marginTop: 'var(--space-3)' }}>Message on WhatsApp</a>
              <Link href="/#packages" className="sidebar-back-link">&larr; Back to all packages</Link>
            </div>
          </aside>
        </div>
      </section>

      <LeadModal />
    </main>
  );
}
