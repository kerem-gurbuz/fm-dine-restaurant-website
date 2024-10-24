import { DynamicImage } from '@/components/dynamic-image';
import { MultiLineTitle } from '@/components/multi-line-title';
import { RESTAURANT_FEATURES } from '@/lib/constants/home-page/about-section';
import { cn } from '@/lib/utils';
import { Divider } from '../patterns';

const locallySourced = RESTAURANT_FEATURES['locally-sourced'];

export function LocallySourced() {
  return (
    <article
      id={locallySourced.id}
      className="grid grid-cols-1 gap-12 md:gap-14 lg:grid-cols-2 xl:gap-0"
    >
      <DynamicImage
        id={locallySourced.id + '-image'}
        images={locallySourced.images}
        className={cn(
          'relative z-20 lg:mb-[-80px]',
          'flex justify-center lg:order-last lg:justify-end',
        )}
      />
      <div
        className={cn(
          'mb-[101px] md:mb-[118px] lg:mb-[165px] lg:mt-[200px]',
          'w-full max-w-[327px] md:max-w-[457px] lg:max-w-[445px]',
          'flex flex-col items-center justify-self-center text-center text-ebony-clay lg:items-start lg:justify-self-start lg:text-left',
        )}
      >
        <Divider className="mb-[36px] md:mb-[39px] lg:mb-[55px]" />
        <MultiLineTitle
          as="h2"
          title={locallySourced.title}
          className="text-preset-heading-lg--mobile md:text-preset-heading-lg--tablet lg:text-preset-heading-lg--desktop mb-[13px] md:mb-[27px]"
        />
        <p className="text-preset-body-base md:text-preset-body-lg">
          {locallySourced.description}
        </p>
      </div>
    </article>
  );
}
