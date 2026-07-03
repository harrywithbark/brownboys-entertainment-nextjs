import Link from 'next/link';

export default function Packages() {
  return (
    <section id="packages" className="packages section">
      <div className="container">
        <div className="section-intro section-intro--left">
          <p className="section-label">Packages</p>
          <h2 className="section-title">Choose your experience</h2>
          <p className="section-subtitle">Three tiers for every event size — all include pro sound and lighting. Contact for pricing.</p>
        </div>

        <div className="packages-grid">
          <div className="package-card card">
            <div className="package-card-title">Basic</div>
            <div className="package-card-price">Contact for pricing</div>
            <p className="text-muted">Small gatherings, house parties, and intimate celebrations that deserve pro-level sound.</p>
            <div className="package-card-features">
              <div className="package-card-feature">Professional DJ performance (timing tailored to your event)</div>
              <div className="package-card-feature">Professional Sound System</div>
              <div className="package-card-feature">Basic Lighting Setup</div>
              <div className="package-card-feature">Song Requests Welcome</div>
              <div className="package-card-feature">MC Services Included</div>
            </div>
            <Link href="/basic" className="btn btn-outline" style={{ marginTop: 'var(--space-6)', width: '100%' }}>View Details</Link>
          </div>

          <div className="package-card card premium">
            <div className="package-card-title">Premium</div>
            <div className="package-card-price">Contact for pricing</div>
            <p className="text-muted">Weddings, corporate functions, and medium-scale events needing that extra polish.</p>
            <div className="package-card-features">
              <div className="package-card-feature">Professional DJ performance (timing tailored to your event)</div>
              <div className="package-card-feature">Premium Sound System</div>
              <div className="package-card-feature">Intelligent Lighting &amp; Effects</div>
              <div className="package-card-feature">Custom Playlist Creation</div>
              <div className="package-card-feature">Professional MC Services</div>
              <div className="package-card-feature">Dance Floor Lighting</div>
              <div className="package-card-feature">Smoke &amp; Haze Effects</div>
            </div>
            <Link href="/premium" className="btn btn-primary" style={{ marginTop: 'var(--space-6)', width: '100%' }}>View Details</Link>
          </div>

          <div className="package-card card luxury shimmer">
            <div className="package-card-featured">Most Popular</div>
            <div className="package-card-title">Luxury</div>
            <div className="package-card-price">Contact for pricing</div>
            <p className="text-muted">The complete entertainment experience for weddings, galas, and once-in-a-lifetime events.</p>
            <div className="package-card-features">
              <div className="package-card-feature">Professional DJ performance (timing tailored to your event)</div>
              <div className="package-card-feature">Top-Tier Sound &amp; Subwoofer</div>
              <div className="package-card-feature">Full Intelligent Light Show</div>
              <div className="package-card-feature">LED Wall &amp; Visuals</div>
              <div className="package-card-feature">Custom Playlist &amp; Planning</div>
              <div className="package-card-feature">Dedicated Event Coordinator</div>
              <div className="package-card-feature">Photo Booth Option Available</div>
              <div className="package-card-feature">Live Performer Collaboration</div>
            </div>
            <Link href="/luxury" className="btn btn-primary" style={{ marginTop: 'var(--space-6)', width: '100%' }}>View Details</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
