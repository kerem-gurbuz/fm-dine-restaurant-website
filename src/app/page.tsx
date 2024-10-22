import { Hero } from '@/components/home-page';

export default function HomePage() {
  return (
    <>
      <Hero />
      <main id="homepage">
        <section className="text-ebony-clay">
          <div className="container max-w-[1110px]">
            {/* About content will be added in feature/homepage-about */}
            About Section
          </div>
        </section>
        <section className="bg-cod-gray text-white">
          <div className="container max-w-[1110px]">
            {/* Menu content will be added in feature/homepage-menu */}
            Menu Section
          </div>
        </section>
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
