import { cn } from '@/lib/utils';
import { EnjoyablePlace, LocallySourced } from './features';

type FeatureHighlightsProps = {
  className?: string;
};

export function FeatureHighlights({ className }: FeatureHighlightsProps) {
  return (
    <div
      aria-label="Feature highlights"
      className={cn(
        'relative z-20 flex flex-col gap-[101px] md:gap-[118px] lg:gap-[121px]',
        className,
      )}
    >
      <EnjoyablePlace />
      <LocallySourced />
    </div>
  );
}
