import {
  AboutSection,
  CtaSection,
  EventsSection,
  HeroSection,
  MenuSection,
} from '@/components/home-page';

export default function HomePage() {
  return (
    <>
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
