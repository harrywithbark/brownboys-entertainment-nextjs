import Link from 'next/link';
import LeadModal from '@/components/LeadModal';

export const metadata = {
  title: 'Luxury Package',
  description: 'BrownBoys Entertainment Luxury DJ Package — full light show, LED wall & custom visuals, dedicated event coordinator, top-tier sound with dual subs, and complete special FX. The ultimate experience for 200+ guest weddings and galas.',
  alternates: { canonical: '/luxury' },
  openGraph: {
    title: 'Luxury DJ Package | BrownBoys Entertainment',
    description: 'Full light show, LED wall, event coordinator, top-tier sound, and complete FX suite for 200+ guest weddings and galas. Surrey, BC.',
    url: 'https://www.brownboysentertainment.ca/luxury',
    images: [{ url: '/assets/dj-hero.png', width: 1200, height: 630, alt: 'BrownBoys Entertainment Luxury DJ Package' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury DJ Package | BrownBoys Entertainment',
    description: 'Full light show, LED wall, event coordinator, top-tier sound, and complete FX suite for luxury weddings & galas.',
    images: ['/assets/dj-hero.png'],
  },
};

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
);

const PersonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);

export default function LuxuryPage() {
  return (
    <main id="main">
      <header className="page-header">
        <div className="page-header-bg" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.12) 0%, transparent 60%), var(--bg-deep)' }}></div>
        <div className="container page-header-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link href="/#packages">Packages</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Luxury</span>
          </div>
          <div className="badge badge-gold" style={{ marginBottom: 'var(--space-4)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            Most Popular
          </div>
          <h1>Luxury Package</h1>
          <p>The complete entertainment experience for weddings, galas, and once-in-a-lifetime events. Full production, dedicated coordination, and zero compromises.</p>
        </div>
      </header>

      <section className="package-detail">
        <div className="container package-detail-grid">
          <div className="package-detail-main">
            <div className="package-detail-section">
              <h3>What&apos;s Included</h3>
              <div className="feature-list">
                {['Professional DJ performance tailored to your event','Top-Tier Sound System with Dual Subwoofers for up to 1,000+ guests with concert-grade clarity','Full Intelligent Light Show with 12+ moving heads, lasers, and programmed sequences','LED Wall & Custom Visuals with bespoke video content and live camera feeds','Custom Playlist & Full Event Planning with multiple pre-event planning sessions','Dedicated Event Coordinator for full timeline management and vendor coordination','Professional MC Services with scripted announcements and interactive crowd engagement','Live Performer Collaboration — coordinate with bands, vocalists, or specialty acts','Photo Booth Available — instant-print with custom backdrop and props (contact for timing & pricing)','Smoke, Haze, Confetti & Special FX for dramatic reveals and peak moments','4 Wireless Microphones including lapel mics for hands-free ceremonies and speeches','Full-Day Setup & Breakdown with on-site technician throughout the event'].map((f,i) => (
                  <div key={i} className="feature-list-item"><CheckIcon /><span>{f}</span></div>
                ))}
              </div>
            </div>

            <div className="package-detail-section">
              <h3>Available Add-Ons</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {[
                  { title: 'Additional LED Wall Sections', desc: 'Expand your visual display for larger venues or wrap-around coverage.' },
                  { title: 'Live Streaming Setup', desc: 'Multi-camera live stream with professional audio feed for remote guests.' },
                  { title: 'Custom Visual Content Design', desc: 'Bespoke motion graphics, monograms, and video content for your LED wall.' },
                  { title: 'Extra DJ / Backup DJ', desc: 'Second DJ for continuous coverage at multi-room or extended events.' },
                  { title: 'Silent Disco Headphones', desc: '50 wireless headphones with dual-channel capability for after-hours fun.' },
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
                {['Luxury Weddings (200+ guests)','High-End Corporate Galas','Destination Weddings','Fundraising Galas','Brand Launch Events','Once-in-a-Lifetime Celebrations'].map((t,i) => (
                  <span key={i} className="ideal-tag"><PersonIcon />{t}</span>
                ))}
              </div>
            </div>

            <div className="package-detail-section">
              <h3>Compare All Packages</h3>
              <table className="comparison-table">
                <thead><tr><th>Feature</th><th><Link href="/basic">Basic</Link></th><th><Link href="/premium">Premium</Link></th><th>Luxury</th></tr></thead>
                <tbody>
                  <tr><td>DJ Coverage</td><td>Tailored</td><td>Tailored</td><td className="comparison-check">Tailored</td></tr>
                  <tr><td>Sound System</td><td>Professional</td><td>Premium</td><td className="comparison-check">Top-Tier + Sub</td></tr>
                  <tr><td>Lighting</td><td>Basic LED</td><td>Intelligent FX</td><td className="comparison-check">Full Light Show</td></tr>
                  <tr><td>LED Wall / Visuals</td><td className="comparison-cross">Not included</td><td className="comparison-cross">Not included</td><td className="comparison-check">Included</td></tr>
                  <tr><td>Custom Playlist</td><td className="comparison-cross">Not included</td><td>Included</td><td className="comparison-check">Full Planning</td></tr>
                  <tr><td>Event Coordinator</td><td className="comparison-cross">Not included</td><td className="comparison-cross">Not included</td><td className="comparison-check">Dedicated</td></tr>
                  <tr><td>Live Performer Collab</td><td className="comparison-cross">Not included</td><td>Optional</td><td className="comparison-check">Included</td></tr>
                  <tr><td>Photo Booth</td><td className="comparison-cross">Not included</td><td className="comparison-cross">Optional</td><td className="comparison-check">Available</td></tr>
                  <tr><td>Special FX</td><td className="comparison-cross">Not included</td><td>Smoke &amp; Haze</td><td className="comparison-check">Full FX Suite</td></tr>
                  <tr><td>On-Site Technician</td><td className="comparison-cross">Not included</td><td className="comparison-cross">Not included</td><td className="comparison-check">Included</td></tr>
                  <tr><td>Pricing</td><td>Contact</td><td>Contact</td><td className="comparison-check">Contact</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <aside className="package-detail-sidebar">
            <div className="sidebar-card" style={{ borderColor: 'var(--gold)' }}>
              <div className="badge badge-gold" style={{ marginBottom: 'var(--space-4)', display: 'inline-block' }}>Most Popular</div>
              <div className="sidebar-price">Contact for pricing</div>
              <p className="sidebar-price-note">Starting price varies by venue size, travel, and add-ons — contact us for a custom quote.</p>
              <div className="sidebar-features">
                {['DJ set (timing tailored to event)','Top-Tier Sound + Subs','Full Light Show','LED Wall & Visuals','Event Coordinator','Photo Booth Available','Full FX Suite','On-Site Technician'].map((f,i) => (
                  <div key={i} className="sidebar-feature"><CheckIcon />{f}</div>
                ))}
              </div>
              <button type="button" className="btn btn-primary btn-lg open-quote-modal" data-package="Luxury" style={{ width: '100%' }}>Get a Custom Quote</button>
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
