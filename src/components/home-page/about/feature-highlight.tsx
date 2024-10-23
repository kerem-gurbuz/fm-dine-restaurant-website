import React from 'react';

import { DynamicImage } from '@/components/dynamic-image';
import type { RestaurantFeature } from '@/lib/types/dine-restaurant.types';
import { cn } from '@/lib/utils';

type FeatureHighlightProps = {
  className?: React.ComponentProps<'div'>['className'];

  feature: RestaurantFeature;
};

export function FeatureHighlight({
  className,

  feature: { id, title, description, images, imageAlt, reverse = false },
}: FeatureHighlightProps) {
  return (
    <article
      id={id}
      className={cn(
        'grid grid-cols-1 items-center gap-12 md:gap-14 lg:grid-cols-2 xl:gap-0',
        className,
      )}
    >
      <DynamicImage
        id={`${id}-image`}
        className={cn({
          'order-first lg:order-last': reverse,
        })}
        images={images}
        imageAlt={imageAlt}
      />

      <div
        className={cn(
          'mx-auto max-w-[327px] text-center text-ebony-clay md:max-w-[457px] lg:ml-auto lg:mr-0 lg:max-w-[445px] lg:text-left',
          { 'lg:ml-0 lg:mr-auto': reverse },
        )}
      >
        <h2 className="text-preset-heading-lg--mobile md:text-preset-heading-lg--tablet lg:text-preset-heading-lg--desktop mb-[13px] md:mb-[27px]">
          {title.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line.trim()}
              {index === 0 ? <br /> : null}
            </React.Fragment>
          ))}
        </h2>
        <p className="text-preset-body-base md:text-preset-body-lg">
          {description}
        </p>
      </div>
    </article>
  );
}
