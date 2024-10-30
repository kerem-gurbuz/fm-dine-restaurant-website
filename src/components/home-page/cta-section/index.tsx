import { DynamicImage } from '@/components/dynamic-image';
import { Button } from '@/components/ui/button';
import { BACKGROUND_IMAGE_CONFIG } from '@/lib/constants/home-page/cta-section';

export function CtaSection() {
  return (
    <section
      id="cta-section"
      aria-labelledby="cta-heading"
      className="relative pb-[80px] pt-[84px] md:pb-[64px] md:pt-[72px] lg:py-[88px]"
    >
      <DynamicImage
        id="cta-background-image"
        className="absolute inset-0"
        imageConfig={BACKGROUND_IMAGE_CONFIG}
        placeholder="blur"
        quality={75}
        priority={false}
      />
      <div className="container relative z-10 max-w-[1110px] px-6 lg:px-[97.5px] xl:px-0">
        <div className="flex flex-col items-center gap-[20px] md:gap-[24px] lg:flex-row lg:justify-between lg:gap-[55px]">
          <h2
            id="cta-heading"
            className="text-preset-heading-lg--mobile md:text-preset-heading-lg--tablet lg:text-preset-heading-lg--desktop text-center text-white lg:text-left"
          >
            Ready to make a reservation?
          </h2>
          <Button
            aria-label="Book a table"
            size="dine-default"
            variant="dine--light"
          >
            Book a table
          </Button>
        </div>
      </div>
    </section>
  );
}
