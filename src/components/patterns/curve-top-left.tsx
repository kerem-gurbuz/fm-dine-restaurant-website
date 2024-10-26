import { cn } from '@/lib/utils';

type CurveTopLeftProps = {
  className?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
};

export function CurveTopLeft({ className, svgProps }: CurveTopLeftProps) {
  return (
    <div
      role="presentation"
      className={cn('overflow-hidden rounded-tl-[100px]', className)}
    >
      {/* SVG for the curved part, positioned at the left */}
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
          d="M100 0h795v320H0V100C0 44.772 44.772 0 100 0z"
          opacity=".077"
        />
      </svg>
      {/* Div that extends to infinity towards right */}
      <div className="w-full bg-[#5C6779] opacity-[.077]" />
    </div>
  );
}
