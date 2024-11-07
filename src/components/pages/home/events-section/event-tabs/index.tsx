import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { EVENT_TABS } from '../constants';
import { EventTab } from '../event-tab';

const DEFAULT_TAB = EVENT_TABS[0];

export function EventTabs() {
  return (
    <Tabs className="relative z-10" defaultValue={DEFAULT_TAB.value}>
      <TabsList
        className={cn(
          'absolute z-20',
          'top-[449px] md:top-[417px] lg:top-[430px]',
          'left-1/2 -translate-x-1/2 lg:left-[calc(50%+55px/2)] lg:translate-x-0 xl:left-[calc(50%+110px)]',
          'flex flex-col items-center justify-center gap-4 md:flex-row md:gap-[10px] lg:flex-col lg:items-start lg:gap-[12px]',
          'text-center text-dark-gray lg:text-left',
        )}
      >
        {EVENT_TABS.map((eventTab) => (
          <TabsTrigger
            key={eventTab.value}
            value={eventTab.value}
            className="text-preset-heading-sm group relative flex-shrink-0 uppercase transition-all duration-200 data-[state=inactive]:font-normal data-[state=active]:text-dark-gray data-[state=inactive]:text-dark-gray/80 hover:text-dark-gray md:w-[223px] lg:w-auto"
          >
            {eventTab.label}
            <span
              className={cn(
                'absolute h-[1px] w-[48px] lg:w-[32px] xl:w-[95px]',
                'top-[27px] md:top-[35px] lg:top-1/2 lg:-translate-y-1/2',
                'left-1/2 -translate-x-1/2 lg:left-[-55px] lg:translate-x-0 xl:left-[-125px]',
                'bg-beaver opacity-0 transition-opacity duration-200 group-data-[state=active]:opacity-100',
              )}
            />
          </TabsTrigger>
        ))}
      </TabsList>
      {EVENT_TABS.map((eventTab) => (
        <EventTab
          key={eventTab.value}
          value={eventTab.value}
          event={eventTab.event}
        />
      ))}
    </Tabs>
  );
}
