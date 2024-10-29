import { DynamicImage } from '@/components/dynamic-image';
import { MultiLineTitle } from '@/components/multi-line-title';
import { Divider } from '@/components/patterns';
import { RESTAURANT_FEATURES } from '@/lib/constants/home-page/about-section';
import { cn } from '@/lib/utils';

const enjoyablePlace = RESTAURANT_FEATURES['enjoyable-place'];

export function EnjoyablePlace() {
  return (
    <article
      id={enjoyablePlace.id}
      aria-labelledby={enjoyablePlace.id + '-heading'}
      className="grid grid-cols-1 gap-12 md:gap-[55px] lg:grid-cols-2 xl:gap-0"
    >
      <DynamicImage
        id={enjoyablePlace.id + '-image'}
        imageConfig={enjoyablePlace.imageConfig}
        className="mt-[-72px] flex justify-center md:mt-[-96px] lg:mt-[-70px] lg:justify-start"
        placeholder="blur"
        quality={75}
        priority={false}
      />
      <div
        className={cn(
          'lg:mb-[198px] lg:mt-[177px]',
          'w-full max-w-[327px] md:max-w-[457px] lg:max-w-[445px]',
          'flex flex-col items-center justify-self-center text-center text-ebony-clay lg:items-start lg:justify-self-end lg:text-left',
        )}
      >
        <Divider className="mb-[36px] md:mb-[39px] lg:mb-[55px]" />
        <MultiLineTitle
          as="h2"
          id={enjoyablePlace.id + '-heading'}
          title={enjoyablePlace.title}
          className="text-preset-heading-lg--mobile md:text-preset-heading-lg--tablet lg:text-preset-heading-lg--desktop mb-[13px] md:mb-[27px]"
        />
        <p className="text-preset-body-base md:text-preset-body-lg">
          {enjoyablePlace.description}
        </p>
      </div>
    </article>
  );
}
