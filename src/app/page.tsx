import type { Metadata } from 'next';

import {
  AboutSection,
  CtaSection,
  EventsSection,
  HeroSection,
  MenuSection,
} from '@/components/pages/home';
import { generateMetadata } from '@/seo/metadata';
import { generateRestaurantSchema } from '@/seo/schemas';

export const metadata: Metadata = generateMetadata({
  title: 'Dine Restaurant - Exquisite Dining Since 1989',
  path: '/',
  images: [
    {
      url: '/assets/images/seo/restaurant-image.jpg',
      alt: 'A group of adults and a child seated around a decorated table at an outdoor event, raising their glasses in a celebratory toast. The table is adorned with a floral centerpiece and glasses of red wine. The setting appears festive, with string lights in the background, creating a warm and cheerful atmosphere. The people are smiling and enjoying the moment together.',
      width: 1200,
      height: 630,
    },
  ],
});

export default function HomePage() {
  const jsonLd = generateRestaurantSchema('/');
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <main id="homepage">
        <AboutSection />
        <MenuSection />
        <EventsSection />
        <CtaSection />
      </main>
    </>
  );
}
