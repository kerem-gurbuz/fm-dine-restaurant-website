import Link from 'next/link';

import { DineLogo, DynamicImage } from '@/components/common';
import { Button } from '@/components/ui/button';
import { BACKGROUND_IMAGE_CONFIG } from './constants';

export function HeroSection() {
  return (
    <header
      id="hero-section"
      aria-labelledby="hero-heading"
      role="banner"
      className="relative bg-black pb-[152px] pt-[232px] text-white md:pb-[216px] md:pt-[374px] lg:pb-[198px] lg:pt-[65px]"
    >
      <DynamicImage
        id="hero-background-image"
        className="absolute inset-0"
        imageConfig={BACKGROUND_IMAGE_CONFIG}
        placeholder="blur"
        quality={85}
        priority={true}
      />
      {/* Overlay */}
      <div className="absolute inset-x-0 bottom-0 top-[220px] z-10 bg-black md:top-[373px] lg:right-[calc(50%-175px)] lg:top-0 xl:right-[calc(50%+175px)]" />
      {/* Content */}
      <div className="container relative z-20 max-w-[1110px] px-6 md:px-[97.5px] xl:px-0">
        <div className="flex flex-col items-center lg:items-start">
          {/* NavLogo */}
          <nav className="mb-[36px] md:mb-[38px] lg:mb-[153px]">
            <Link href="/">
              <DineLogo className="h-[32px] w-[82.4px] fill-white md:h-[40px] md:w-[103px]" />
              <span className="sr-only">Homepage</span>
            </Link>
          </nav>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1
              id="hero-heading"
              className="text-preset-heading-xl--mobile md:text-preset-heading-xl--tablet lg:text-preset-heading-xl--desktop mb-[21px] md:mb-[20px] lg:mb-[10px]"
            >
              Exquisite dining <br /> since 1989
            </h1>
            <p className="text-preset-body-base md:text-preset-body-lg mb-[53px] max-w-[327px] md:mb-[52px] md:max-w-[573px] lg:mb-[40px] lg:max-w-[445px]">
              Experience our seasonal menu in beautiful country surroundings.
              Eat the freshest produce from the comfort of our farmhouse.
            </p>
            <Button size="dine-default" variant="dine--light" asChild>
              <Link href="/booking">Book a table</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
