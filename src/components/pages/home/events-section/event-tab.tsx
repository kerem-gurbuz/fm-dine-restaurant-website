import Link from 'next/link';

import { DynamicImage } from '@/components/common';
import { Lines } from '@/components/common/patterns';
import { Button } from '@/components/ui/button';
import { TabsContent } from '@/components/ui/tabs';
import type { Event, EventType } from '@/lib/types/pages/home';
import { cn } from '@/lib/utils';

type EventTabProps = {
  value: EventType;
  event: Event;
};

export function EventTab({ value, event }: EventTabProps) {
  return (
    <TabsContent value={value}>
      <article
        aria-labelledby={event.id + '-heading'}
        className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[55px] xl:gap-0"
      >
        <DynamicImage
          id={event.id + '-image'}
          imageConfig={event.imageConfig}
          className="flex justify-center lg:justify-start"
          placeholder="blur"
          quality={75}
          priority={false}
          pattern={{
            wrapperClassName:
              'absolute left-[-58px] top-[-38px] z-20 hidden md:block lg:left-[-40px]',
            element: <Lines />,
          }}
        />
        <div
          id={event.id + '-content'}
          className={cn(
            'mt-[192px] md:mt-[140px] lg:mt-[70px]',
            'w-full max-w-[327px] md:max-w-[457px] lg:max-w-[445px]',
            'flex flex-col items-center justify-self-center lg:items-start lg:justify-self-end',
            'text-center text-ebony-clay lg:text-left',
          )}
        >
          <h2
            id={event.id + '-heading'}
            className="text-preset-heading-lg--mobile md:text-preset-heading-lg--tablet lg:text-preset-heading-lg--desktop mb-[13px] md:mb-[19px]"
          >
            {event.title}
          </h2>
          <p className="text-preset-body-base md:text-preset-body-lg mb-[27px] md:mb-[30px] md:h-[120px]">
            {event.description}
          </p>
          <Button
            size="dine-default"
            variant="dine--light"
            className="bg-cod-gray hover:border-cod-gray"
            asChild
          >
            <Link href="/booking">Book a table</Link>
          </Button>
        </div>
      </article>
    </TabsContent>
  );
}
