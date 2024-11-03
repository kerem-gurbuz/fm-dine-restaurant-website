import {
  AboutSection,
  CtaSection,
  EventsSection,
  HeroSection,
  MenuSection,
} from '@/components/pages/home';

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
