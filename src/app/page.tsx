import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <header className="bg-mirage text-white">
        <div className="container max-w-[1110px]">
          <nav>
            <Link href="/">
              <Image
                src="/assets/images/logo.svg"
                alt="Dine Restaurant"
                width={103}
                height={40}
                priority
              />
            </Link>
          </nav>
          {/* Hero content will be added in feature/homepage-hero */}
        </div>
      </header>
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
