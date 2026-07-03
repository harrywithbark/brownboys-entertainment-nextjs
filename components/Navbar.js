'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const pathname = usePathname();
  const prefix = pathname === '/' ? '' : '/';

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="container">
          <div className="navbar-inner">
            <Link href="/" className="navbar-logo">BrownBoys<span> Entertainment</span></Link>

            <div className="navbar-links">
              <a href={`${prefix}#services`} className="navbar-link">Services</a>
              <a href={`${prefix}#weddings`} className="navbar-link">Weddings</a>
              <a href={`${prefix}#gallery`} className="navbar-link">Gallery</a>
              <a href={`${prefix}#packages`} className="navbar-link">Packages</a>
              <a href={`${prefix}#reviews`} className="navbar-link">Reviews</a>
              <a href={`${prefix}#contact`} className="navbar-link">Contact</a>
            </div>

            <a href="https://wa.me/12505520634?text=Hi%20BrownBoys%20Entertainment!%20I%27d%20like%20to%20check%20availability%20for%20my%20event." target="_blank" rel="noopener noreferrer" className="btn btn-primary navbar-cta">Book Now</a>

            <button className="mobile-toggle" aria-label="Toggle mobile menu" aria-expanded="false">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation" aria-hidden="true">
        <a href={`${prefix}#services`} className="mobile-menu-link">Services</a>
        <a href={`${prefix}#weddings`} className="mobile-menu-link">Weddings</a>
        <a href={`${prefix}#gallery`} className="mobile-menu-link">Gallery</a>
        <a href={`${prefix}#packages`} className="mobile-menu-link">Packages</a>
        <a href={`${prefix}#reviews`} className="mobile-menu-link">Reviews</a>
        <a href={`${prefix}#contact`} className="mobile-menu-link">Contact</a>
        <a href="https://wa.me/12505520634?text=Hi%20BrownBoys%20Entertainment!%20I%27d%20like%20to%20check%20availability%20for%20my%20event." target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: 'var(--space-6)', width: '100%' }}>Book Now</a>
      </div>
    </>
  );
}
