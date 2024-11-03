import { CurveTopRight } from '@/components/common/patterns';
import { EventTabs } from './event-tabs';

export function EventsSection() {
  return (
    <section
      id="events-section"
      className="relative pb-[124px] pt-[80px] md:py-[120px] lg:py-[160px]"
    >
      <div className="container max-w-[1110px] px-6 md:px-[97.5px] xl:px-0">
        <EventTabs />
      </div>
      <CurveTopRight className="absolute left-0 right-1/2 top-0 hidden md:flex lg:right-[calc(50%+175px)]" />
    </section>
  );
}
