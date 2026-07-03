import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ClientInit from '@/components/ClientInit';

export const metadata = {
  title: 'BrownBoys Entertainment | Wedding & Event DJ | Surrey, BC',
  description: 'BrownBoys Entertainment — premium DJ, lighting, sparklers, low fog, and Bhangra for weddings, Jaggo, engagements, and club events. Based in Surrey, BC. Available worldwide.',
  keywords: 'DJ Surrey BC, wedding DJ Vancouver, Jaggo DJ, engagement party DJ, Bhangra DJ, BrownBoys Entertainment, DJ lighting Surrey',
  openGraph: {
    title: 'BrownBoys Entertainment | Premium DJ & Event Production',
    description: 'Weddings, Jaggo, engagements, club nights — DJ, lighting, sparklers, low fog & Bhangra. Based in Surrey, BC. Now booking 2026.',
    images: ['/assets/dj-hero.png'],
    type: 'website',
  },
  icons: {
    icon: '/assets/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'BrownBoys Entertainment',
              description: 'Premium DJ and event production — weddings, Jaggo, engagements, club events, lighting, sparklers, low fog, and Bhangra.',
              url: 'https://www.instagram.com/brownboysentertainment/',
              telephone: '+12505520634',
              image: '/assets/dj-hero.png',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Surrey',
                addressRegion: 'BC',
                postalCode: 'V3V 2E9',
                addressCountry: 'CA',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 49.1789707,
                longitude: -122.86788,
              },
              sameAs: [
                'https://www.instagram.com/brownboysentertainment/',
                'https://www.google.com/maps/place/Brownboys+entertainment/@49.1789707,-122.86788,15z',
              ],
              areaServed: ['Surrey', 'Vancouver', 'Burnaby', 'Richmond', 'Greater Vancouver'],
            }),
          }}
        />
      </head>
      <body className="loaded">
        <a href="#main" className="sr-only">Skip to main content</a>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <ClientInit />
      </body>
    </html>
  );
}
