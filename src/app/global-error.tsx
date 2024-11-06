'use client';

import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

import { Button } from '@/components/ui/button';

// TODO: Log the error to an error reporting service (such as Sentry)

/*
  NOTES:

  Error boundary reset doesn't seem to work
  https://github.com/vercel/next.js/issues/63369
  ------------------------------------------------------------------------
  "You need to call the startTransition() function to re-render both client-side and server-side components in a synchronized manner."

  startTransition
  https://react.dev/reference/react/startTransition
  ------------------------------------------------------------------------
  The startTransition function lets you mark a state update as a Transition.

  # Parameters 

    - scope: A function that updates some state by calling one or more set functions. React immediately calls scope with no arguments and marks all state updates scheduled synchronously during the scope function call as Transitions. They will be non-blocking and will not display unwanted loading indicators.

  # Returns 

    startTransition does not return anything.

  # Caveats 

    ...
    - You can wrap an update into a Transition only if you have access to the set function of that state. If you want to start a Transition in response to some prop or a custom Hook return value, try useDeferredValue instead.

    ! THE FUNCTION YOU PASS TO START_TRANSITION MUST BE SYNCHRONOUS. React immediately executes this function, marking all state updates that happen while it executes as Transitions. If you try to perform more state updates later (for example, in a timeout), they won’t be marked as Transitions.

    - A state update marked as a Transition will be interrupted by other state updates. For example, if you update a chart component inside a Transition, but then start typing into an input while the chart is in the middle of a re-render, React will restart the rendering work on the chart component after handling the input state update.
    ...
 */

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  const handleReset = () => {
    startTransition(() => {
      // Attempt to recover by trying to re-render the segment
      router.refresh();
      reset();
    });
  };

  return (
    <html>
      <body>
        <div
          id="global-error-page"
          aria-labelledby="global-error-heading"
          className="flex min-h-screen flex-col items-center justify-center bg-cod-gray p-6 text-white"
        >
          <div className="max-w-lg space-y-6 text-center">
            <h1
              id="global-error-heading"
              className="text-preset-heading-lg--mobile md:text-preset-heading-lg--tablet lg:text-preset-heading-lg--desktop"
            >
              Critical Error
            </h1>
            <p className="text-preset-body-base md:text-preset-body-lg">
              We apologize, but a critical error has occurred. Our team has been
              notified and is working to resolve the issue.{' '}
              {error.digest ? `(${error.digest})` : null}
            </p>
            <div className="pt-4">
              <Button
                size="dine-default"
                variant="dine--light"
                onClick={handleReset}
              >
                Refresh Page
              </Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
