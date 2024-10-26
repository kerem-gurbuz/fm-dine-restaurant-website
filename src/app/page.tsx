import { AboutSection, Hero, MenuSection } from '@/components/home-page';

export default function HomePage() {
  return (
    <>
      <Hero />
      <main id="homepage">
        <AboutSection />
        <MenuSection />
        <section className="text-ebony-clay">
          <div className="container max-w-[1110px]">
            {/* Events content will be added in feature/homepage-events */}
            Events Section
          </div>
        </section>
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
