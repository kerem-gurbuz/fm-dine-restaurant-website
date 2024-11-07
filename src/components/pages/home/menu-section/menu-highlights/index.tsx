import { cn } from '@/lib/utils';
import { MENU_HIGHLIGHTS } from '../constants';
import { MenuItem } from '../menu-item';

type MenuHighlightsProps = {
  className?: string;
};

export function MenuHighlights({ className }: MenuHighlightsProps) {
  return (
    <div
      aria-label="Menu highlights"
      className={cn('flex flex-col gap-6 xl:mt-[55px]', className)}
    >
      {MENU_HIGHLIGHTS.map((item, index) => {
        const isLastItem = index === MENU_HIGHLIGHTS.length - 1;
        return <MenuItem key={item.id} item={item} isLastItem={isLastItem} />;
      })}
    </div>
  );
}
