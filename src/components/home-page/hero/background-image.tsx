import Image from 'next/image';

import bgDesktop from '/public/assets/images/homepage/hero-bg-desktop@2x.jpg';
import bgMobile from '/public/assets/images/homepage/hero-bg-mobile@2x.jpg';
import bgTablet from '/public/assets/images/homepage/hero-bg-tablet@2x.jpg';

const ALT_TEXT = 'A plate of spaghetti with shrimp, marinara sauce and herbs.';
const PRIORITY = true;
const QUALITY = 85;

type BackgroundImageProps = {
  className?: React.ComponentProps<'div'>['className'];
};

export function BackgroundImage({ className }: BackgroundImageProps) {
  return (
    <div className={className}>
      <div className="relative h-full w-full">
        {/* Mobile Image (default) */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src={bgMobile.src}
            alt={ALT_TEXT}
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw"
            placeholder="blur"
            blurDataURL={bgMobile.blurDataURL}
            priority={PRIORITY}
            quality={QUALITY}
            fill
          />
        </div>
        {/* Tablet Image */}
        <div className="absolute inset-0 hidden md:block lg:hidden">
          <Image
            src={bgTablet.src}
            alt={ALT_TEXT}
            className="object-cover object-top"
            sizes="(min-width: 768px) and (max-width: 1024px) 100vw"
            placeholder="blur"
            blurDataURL={bgTablet.blurDataURL}
            priority={PRIORITY}
            quality={QUALITY}
            fill
          />
        </div>
        {/* Desktop Image */}
        <div className="absolute inset-0 hidden lg:block">
          <Image
            src={bgDesktop.src}
            alt={ALT_TEXT}
            className="object-cover object-right-bottom"
            sizes="(min-width: 1024px) 100vw"
            placeholder="blur"
            blurDataURL={bgDesktop.blurDataURL}
            priority={PRIORITY}
            quality={QUALITY}
            fill
          />
        </div>
      </div>
    </div>
  );
}
