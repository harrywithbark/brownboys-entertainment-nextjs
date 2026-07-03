import Hero from '@/components/Hero';
import StatsStrip from '@/components/StatsStrip';
import EventPills from '@/components/EventPills';
import Services from '@/components/Services';
import WeddingSpecialist from '@/components/WeddingSpecialist';
import Gallery from '@/components/Gallery';
import Approach from '@/components/Approach';
import Packages from '@/components/Packages';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <StatsStrip />
      <EventPills />
      <Services />
      <WeddingSpecialist />
      <Gallery />
      <Approach />
      <Packages />
      <Reviews />
      <FAQ />
      <Contact />
    </main>
  );
}
