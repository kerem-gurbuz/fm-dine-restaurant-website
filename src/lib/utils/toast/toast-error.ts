import type { BookingFormData } from '@/lib/types/booking-page';
import type { ToastMessage } from '@/lib/types/toast-messages.types';

/**
 * Type guard to check if an error object is an API error
 * @param error - The error to check
 */
const isApiError = (
  error: unknown,
): error is { code: string; message?: string } => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    typeof (error as Record<string, unknown>).code === 'string'
  );
};

/**
 * Generates an error toast message based on the type of error encountered during booking.
 * Handles various error scenarios with appropriate user-friendly messages.
 *
 * @param error - The error object that was caught
 * @param data - Optional partial booking data that may be used for context in error messages
 * @returns A formatted toast message object with error styling
 *
 * @example
 * ```typescript
 * try {
 *   await submitBooking(data);
 * } catch (error) {
 *   const message = generateBookingErrorMessage(error, data);
 *   toast(message);
 * }
 * ```
 */
export const generateBookingErrorMessage = (
  error: unknown,
  data?: Partial<BookingFormData>,
): ToastMessage => {
  /* ------------------------------------------------------------------------ */
  // Handle standard error instances
  if (error instanceof Error) {
    // Map specific error types to user-friendly messages
    switch (error.name) {
      case 'ValidationError':
        return {
          title: 'Invalid Reservation Details',
          description: 'Please check your reservation details and try again.',
          variant: 'dine--destructive',
        };

      case 'NetworkError':
        return {
          title: 'Connection Error',
          description: 'Please check your internet connection and try again.',
          variant: 'dine--destructive',
        };

      case 'TimeoutError':
        return {
          title: 'Request Timeout',
          description:
            'The request took too long to process. Please try again.',
          variant: 'dine--destructive',
        };

      case 'ConflictError':
        return {
          title: 'Time Slot Unavailable',
          description: data?.time
            ? `Sorry, the time slot ${data.time.hour}:${data.time.minute} ${data.time.period} is no longer available. Please select a different time.`
            : 'This time slot is no longer available. Please select a different time.',
          variant: 'dine--destructive',
        };

      default:
        return {
          title: 'Booking Failed',
          description:
            "We couldn't process your reservation. Please try again or contact us directly.",
          variant: 'dine--destructive',
        };
    }
  }
  /* ------------------------------------------------------------------------ */
  // Handle API-specific errors
  if (isApiError(error)) {
    // Map specific API error codes to user-friendly messages
    switch (error.code) {
      case 'CAPACITY_EXCEEDED':
        return {
          title: 'Unable to Reserve',
          description:
            "We don't have enough capacity for this number of guests at the selected time.",
          variant: 'dine--destructive',
        };

      case 'INVALID_TIME':
        return {
          title: 'Invalid Time Selected',
          description:
            'The selected time is outside our operating hours. Please choose a different time.',
          variant: 'dine--destructive',
        };

      case 'MAINTENANCE':
        return {
          title: 'System Maintenance',
          description:
            'Our booking system is currently under maintenance. Please try again in a few minutes.',
          variant: 'dine--destructive',
        };

      default:
        return {
          title: 'Booking Error',
          description:
            error.message || 'An unexpected error occurred. Please try again.',
          variant: 'dine--destructive',
        };
    }
  }
  /* ------------------------------------------------------------------------ */
  // Fallback error message for unknown error types
  return {
    title: 'Unable to Complete Reservation',
    description:
      'An unexpected error occurred. Please try again or contact us directly.',
    variant: 'dine--destructive',
  };
};
