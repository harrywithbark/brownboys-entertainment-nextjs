import Link from 'next/link';
import LeadModal from '@/components/LeadModal';

export const metadata = {
  title: 'Premium Package',
  description: 'BrownBoys Entertainment Premium DJ Package — intelligent moving-head lighting, custom playlist, professional MC, smoke & haze, and premium sound for up to 300 guests. Ideal for weddings and corporate galas.',
  alternates: { canonical: '/premium' },
  openGraph: {
    title: 'Premium DJ Package | BrownBoys Entertainment',
    description: 'Intelligent lighting, custom playlist, professional MC, and premium sound for weddings & galas up to 300 guests. Surrey, BC.',
    url: 'https://www.brownboysentertainment.ca/premium',
    images: [{ url: '/assets/dj-hero.png', width: 1200, height: 630, alt: 'BrownBoys Entertainment Premium DJ Package' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium DJ Package | BrownBoys Entertainment',
    description: 'Intelligent lighting, custom playlist, professional MC, and premium sound for weddings & galas up to 300 guests.',
    images: ['/assets/dj-hero.png'],
  },
};

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
);

const PersonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);

export default function PremiumPage() {
  return (
    <main id="main">
      <header className="page-header">
        <div className="page-header-bg" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(204,26,46,0.15) 0%, transparent 60%), var(--bg-deep)' }}></div>
        <div className="container page-header-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link href="/#packages">Packages</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Premium</span>
          </div>
          <p className="section-label" style={{ color: 'var(--red-neon)' }}>DJ Package</p>
          <h1>Premium Package</h1>
          <p>Everything you need for a standout wedding, corporate gala, or medium-scale event. Premium sound, intelligent lighting, and a custom experience.</p>
        </div>
      </header>

      <section className="package-detail">
        <div className="container package-detail-grid">
          <div className="package-detail-main">
            <div className="package-detail-section">
              <h3>What&apos;s Included</h3>
              <div className="feature-list">
                {['Professional DJ performance tailored to your event','Premium Sound System suitable for up to 300 guests with crystal-clear clarity','Intelligent Lighting & Moving-Head Effects with programmed shows synced to music','Custom Playlist Creation — pre-event consultation to craft your perfect soundtrack','Professional MC Services with polished announcements and crowd engagement','Dance Floor Lighting including spotlights, color washes, and beam effects','Smoke & Haze Effects for atmospheric depth and light beam visibility','Two Wireless Microphones for speeches, toasts, and interactive moments','Pre-Event Planning Meeting to finalize timeline, special songs, and logistics','Professional setup before your event with full sound check and safety checks'].map((f,i) => (
                  <div key={i} className="feature-list-item"><CheckIcon /><span>{f}</span></div>
                ))}
              </div>
            </div>

            <div className="package-detail-section">
              <h3>Available Add-Ons</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {[
                  { title: 'LED Wall / Visuals', desc: 'Custom video content and live visuals projected on a full LED wall.' },
                  { title: 'Photo Booth', desc: 'Instant-print photo booth with props and custom backdrop — contact for timing & pricing.' },
                  { title: 'Extra DJ Hour', desc: 'Extend the party with an additional hour of DJ performance.' },
                  { title: 'Live Performer Integration', desc: 'Coordinate with live musicians or vocalists for hybrid sets.' },
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
                {['Weddings (100-300 guests)','Corporate Galas','Product Launches','Anniversary Celebrations','Medium-Scale Private Events'].map((t,i) => (
                  <span key={i} className="ideal-tag"><PersonIcon />{t}</span>
                ))}
              </div>
            </div>

            <div className="package-detail-section">
              <h3>Compare All Packages</h3>
              <table className="comparison-table">
                <thead><tr><th>Feature</th><th><Link href="/basic">Basic</Link></th><th>Premium</th><th><Link href="/luxury">Luxury</Link></th></tr></thead>
                <tbody>
                  <tr><td>DJ Coverage</td><td>Tailored</td><td className="comparison-check">Tailored</td><td>Tailored</td></tr>
                  <tr><td>Sound System</td><td>Professional</td><td className="comparison-check">Premium</td><td>Top-Tier + Sub</td></tr>
                  <tr><td>Lighting</td><td>Basic LED</td><td className="comparison-check">Intelligent FX</td><td>Full Light Show</td></tr>
                  <tr><td>MC Services</td><td>Included</td><td className="comparison-check">Professional</td><td>Dedicated</td></tr>
                  <tr><td>Custom Playlist</td><td className="comparison-cross">Not included</td><td className="comparison-check">Included</td><td>Full Planning</td></tr>
                  <tr><td>Dance Floor Lighting</td><td className="comparison-cross">Not included</td><td className="comparison-check">Included</td><td>Advanced</td></tr>
                  <tr><td>Smoke &amp; Haze</td><td className="comparison-cross">Not included</td><td className="comparison-check">Included</td><td>Included</td></tr>
                  <tr><td>LED Wall / Visuals</td><td className="comparison-cross">Not included</td><td className="comparison-cross">Not included</td><td>Included</td></tr>
                  <tr><td>Event Coordinator</td><td className="comparison-cross">Not included</td><td className="comparison-cross">Not included</td><td>Included</td></tr>
                  <tr><td>Photo Booth</td><td className="comparison-cross">Not included</td><td className="comparison-cross">Optional</td><td>Optional</td></tr>
                  <tr><td>Pricing</td><td>Contact</td><td className="comparison-check">Contact</td><td>Contact</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <aside className="package-detail-sidebar">
            <div className="sidebar-card">
              <div className="sidebar-price">Contact for pricing</div>
              <p className="sidebar-price-note">Final quote depends on venue, location, and add-ons — contact us to get a custom quote.</p>
              <div className="sidebar-features">
                {['DJ set (timing tailored to event)','Premium Sound System','Intelligent Lighting FX','Custom Playlist','Professional MC','Smoke & Haze Effects','Pre-Event Planning'].map((f,i) => (
                  <div key={i} className="sidebar-feature"><CheckIcon />{f}</div>
                ))}
              </div>
              <button type="button" className="btn btn-primary btn-lg open-quote-modal" data-package="Premium" style={{ width: '100%' }}>Get a Custom Quote</button>
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
