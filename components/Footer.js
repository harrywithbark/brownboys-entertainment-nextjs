'use client';

import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const prefix = pathname === '/' ? '' : '/';

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <div className="footer-brand">BrownBoys Entertainment</div>
            <p className="footer-tagline">Premium DJ &amp; Event Services</p>
            <p className="footer-desc">Premium DJ, lighting, sparklers, low fog &amp; Bhangra. Based in Surrey, BC — available worldwide.</p>
            <div className="footer-social">
              <a href="https://www.instagram.com/brownboysentertainment/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://www.google.com/maps/place/Brownboys+entertainment/@49.1789707,-122.86788,15z" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Google Maps">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27c3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 3 12.1 3C6.42 3 2.03 7.3 2.03 12c0 4.61 4.16 9 10.1 9c6.64 0 9.06-4.75 9.06-4.75s-.24-2.65-.84-4.15z"/></svg>
              </a>
              <a href="https://wa.me/12505520634?text=Hi%20BrownBoys%20Entertainment!" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.895c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.895 0-3.171-1.235-6.152-3.476-8.397z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Services</h4>
            <div className="footer-links">
              <a href={`${prefix}#services`} className="footer-link">Wedding DJ</a>
              <a href={`${prefix}#weddings`} className="footer-link">Jaggo &amp; Engagements</a>
              <a href={`${prefix}#services`} className="footer-link">Bhangra &amp; Dholi</a>
              <a href={`${prefix}#services`} className="footer-link">Club &amp; Live Mixes</a>
              <a href={`${prefix}#services`} className="footer-link">Lighting &amp; Production</a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Company</h4>
            <div className="footer-links">
              <a href={`${prefix}#approach`} className="footer-link">About Us</a>
              <a href={`${prefix}#packages`} className="footer-link">Packages</a>
              <a href={`${prefix}#gallery`} className="footer-link">Gallery</a>
              <a href={`${prefix}#reviews`} className="footer-link">Reviews</a>
              <a href={`${prefix}#faq`} className="footer-link">FAQ</a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Get in Touch</h4>
            <div className="footer-links">
              <a href="https://wa.me/12505520634?text=Hi%20BrownBoys%20Entertainment!%20I%27d%20like%20to%20get%20a%20quote." target="_blank" rel="noopener noreferrer" className="footer-link">Request a Quote</a>
              <a href="tel:+12505520634" className="footer-link">+1 (250) 552-0634</a>
              <a href="https://www.instagram.com/brownboysentertainment/" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">&copy; 2026 BrownBoys Entertainment. All rights reserved.</p>
          <p className="text-dim" style={{ fontSize: 'var(--text-sm)' }}>Premium DJ &amp; Event Production · Surrey, BC · Available Worldwide · Since 2014</p>
        </div>
      </div>
    </footer>
  );
}
