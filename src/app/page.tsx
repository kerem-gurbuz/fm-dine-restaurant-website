import {
  AboutSection,
  EventsSection,
  Hero,
  MenuSection,
} from '@/components/home-page';

export default function HomePage() {
  return (
    <>
      <Hero />
      <main id="homepage">
        <AboutSection />
        <MenuSection />
        <EventsSection />
        <section className="text-white">
          <div className="container max-w-[1110px]">
            {/* Booking CTA content will be added in feature/homepage-cta */}
            Booking CTA
          </div>
        </section>
      </main>
    </>
  );
}
