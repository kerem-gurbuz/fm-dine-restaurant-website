import * as React from 'react';

import { cn } from '@/lib/utils';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          // 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          'flex h-[43px] w-full border-b border-cod-gray/50 pb-[15px] pl-[16px] font-league-spartan text-[20px] font-normal leading-[28px] text-cod-gray caret-beaver placeholder:text-cod-gray/50 focus-visible:border-cod-gray focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          "aria-[invalid='true']:border-dusty-rose aria-[invalid='true']:text-dusty-rose aria-[invalid='true']:placeholder:text-dusty-rose/50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
