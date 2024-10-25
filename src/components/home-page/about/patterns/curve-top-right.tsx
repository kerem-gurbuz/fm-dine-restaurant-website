import { cn } from '@/lib/utils';

type CurveTopRightProps = {
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
  svgProps?: React.SVGProps<SVGSVGElement>;
};

export function CurveTopRight({ className, svgProps }: CurveTopRightProps) {
  return (
    <div
      role="presentation"
      className={cn('overflow-hidden rounded-tr-[100px]', className)}
    >
      {/* Div that extends to infinity towards left */}
      <div className="w-full bg-[#5C6779] opacity-[.077]" />
      {/* SVG for the curved part, positioned at the right */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        width="895"
        height="320"
        {...svgProps}
      >
        <path
          fill="#5C6779"
          fillRule="evenodd"
          d="M795 0H0v320h895V100C895 44.772 850.228 0 795 0z"
          opacity=".077"
        />
      </svg>
    </div>
  );
}
