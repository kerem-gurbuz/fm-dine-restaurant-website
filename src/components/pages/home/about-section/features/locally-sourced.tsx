import { DynamicImage, MultiLineTitle } from '@/components/common';
import { Divider, Lines } from '@/components/common/patterns';
import { RESTAURANT_FEATURES } from '@/config/constants/pages/home';
import { cn } from '@/lib/utils';

const locallySourced = RESTAURANT_FEATURES['locally-sourced'];

export function LocallySourced() {
  return (
    <article
      id={locallySourced.id}
      aria-labelledby={locallySourced.id + '-heading'}
      className="grid grid-cols-1 gap-12 md:gap-[55px] lg:grid-cols-2 xl:gap-0"
    >
      <DynamicImage
        id={locallySourced.id + '-image'}
        imageConfig={locallySourced.imageConfig}
        className="flex justify-center lg:order-last lg:mb-[-80px] lg:justify-end"
        placeholder="blur"
        quality={75}
        priority={false}
        pattern={{
          wrapperClassName:
            'absolute right-[-58px] top-[228px] z-30 hidden md:block lg:top-[282px] 2xl:right-[-114px]',
          element: <Lines />,
        }}
      />
      <div
        className={cn(
          'w-full max-w-[327px] md:max-w-[457px] lg:max-w-[445px]',
          'mb-[101px] md:mb-[118px] lg:mb-[165px] lg:mt-[200px]',
          'flex flex-col items-center justify-self-center text-center text-ebony-clay lg:items-start lg:justify-self-start lg:text-left',
        )}
      >
        <Divider className="mb-[36px] md:mb-[39px] lg:mb-[55px]" />
        <MultiLineTitle
          as="h2"
          id={locallySourced.id + '-heading'}
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
