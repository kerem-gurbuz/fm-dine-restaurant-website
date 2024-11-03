import Link from 'next/link';

import { DineLogo, DynamicImage } from '@/components/common';
import { Button } from '@/components/ui/button';
import { HERO_SECTION_BACKGROUND_IMAGE_CONFIG } from '@/config/constants/pages/booking';

type HeroSectionProps = {
  onScrollToBooking: () => void;
};

export function HeroSection({ onScrollToBooking }: HeroSectionProps) {
  return (
    <header
      id="hero-section"
      aria-labelledby="hero-heading"
      className="relative bg-black pb-[228px] pt-[56px] md:pb-[268px] xl:pb-[153px] xl:pt-[65px]"
    >
      <DynamicImage
        id="hero-background-image"
        className="absolute inset-0"
        imageConfig={HERO_SECTION_BACKGROUND_IMAGE_CONFIG}
        placeholder="blur"
        quality={85}
        priority={true}
      />
      {/* Content */}
      <div className="container relative z-10 max-w-[1110px] px-6 md:px-[39.5px] lg:px-[97.5px] xl:px-0">
        <div className="flex flex-col items-center xl:items-start">
          {/* NavLogo */}
          <nav className="mb-[44px] md:mb-[70px] md:ml-0 md:mr-auto xl:mb-[153px]">
            <Link href="/">
              <DineLogo className="h-[32px] w-[82.4px] fill-white md:h-[40px] md:w-[103px]" />
              <span className="sr-only">Homepage</span>
            </Link>
          </nav>
          <div className="flex flex-col items-center text-center text-white xl:items-start xl:text-left">
            <h1
              id="hero-heading"
              className="text-preset-heading-xl--mobile md:text-preset-heading-xl--tablet xl:text-preset-heading-xl--desktop mb-[13px] md:mb-[12px] xl:mb-[18px]"
            >
              Reservations
            </h1>
            <p className="text-preset-body-base md:text-preset-body-lg max-w-[327px] max-md:mb-[19px] md:max-w-[573px] xl:max-w-[445px]">
              We can&apos;t wait to host you. If you have any special
              requirements please feel free to call on the phone number below.
              We&apos;ll be happy to accommodate you.
            </p>
            <Button
              size="dine-default"
              variant="dine--light"
              className="md:hidden"
              onClick={onScrollToBooking}
            >
              Reserve Place
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
