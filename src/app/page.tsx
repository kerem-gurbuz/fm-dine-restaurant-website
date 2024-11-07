import {
  AboutSection,
  CtaSection,
  EventsSection,
  HeroSection,
  MenuSection,
} from '@/components/pages/home';
import { generateHomePageMetadata } from '@/config/seo/metadata';
import { generateHomePageSchema } from '@/config/seo/schemas';

export const metadata = generateHomePageMetadata();

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateHomePageSchema()),
        }}
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
