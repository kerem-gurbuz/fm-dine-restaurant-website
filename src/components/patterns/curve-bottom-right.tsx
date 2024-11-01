import { cn } from '@/lib/utils';

type CurveBottomRightProps = {
  className?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
};

export function CurveBottomRight({
  className,
  svgProps,
}: CurveBottomRightProps) {
  return (
    <div
      role="presentation"
      className={cn('overflow-hidden rounded-br-[100px]', className)}
    >
      {/* Div that extends to infinity towards left */}
      <div className="w-full bg-[#5C6779] opacity-[.077]" />
      {/* SVG for the curved part, positioned at the right */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        width="993"
        height="320"
        {...svgProps}
      >
        <path
          fill="#5C6779"
          fillRule="evenodd"
          d="M893 320H0V0h993v220c0 55.228-44.772 100-100 100z"
          opacity=".077"
        />
      </svg>
    </div>
  );
}
