import { cn } from '@/lib/utils';
import { EnjoyablePlace, LocallySourced } from './features';

type FeatureHighlightProps = {
  className?: React.ComponentProps<'div'>['className'];
};

export function FeatureHighlight({ className }: FeatureHighlightProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-[101px] md:gap-[118px] lg:gap-[121px]',
        className,
      )}
    >
      <EnjoyablePlace />
      <LocallySourced />
    </div>
  );
}
