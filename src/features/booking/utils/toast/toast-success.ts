import type { BookingFormData, ToastMessage } from '../../types';

/**
 * Generates a success toast message for a successful booking reservation.
 *
 * @param data - The complete booking form data that was successfully processed
 * @returns A formatted toast message object with success styling
 *
 * @example
 * ```typescript
 * const bookingData = {
 *   name: "John Doe",
 *   time: { hour: "07", minute: "30", period: "PM" },
 *   // ... other booking data
 * };
 * const message = generateBookingSuccessMessage(bookingData);
 * toast(message); // Using your toast library
 * ```
 */
export const generateBookingSuccessMessage = (
  data: BookingFormData,
): ToastMessage => {
  // Format date for display
  const formattedDate = new Date(
    `${data.date.year}-${data.date.month}-${data.date.day}`,
  ).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Format time for display
  const formattedTime = `${data.time.hour}:${data.time.minute} ${data.time.period}`;

  // Handle plural/singular for guests
  const guestText = data.guests === 1 ? 'guest' : 'guests';

  return {
    title: 'Reservation Confirmed! 🎉',
    description:
      `Thank you, ${data.name}! Your reservation for ${data.guests} ${guestText} ` +
      `on ${formattedDate} at ${formattedTime} has been confirmed. ` +
      `A confirmation email has been sent to ${data.email}.`,
    variant: 'dine--success',
  };
};

/* 
  The output:
  ------------------------------------------------------------------------
  * For a single guest:

    Title: "Reservation Confirmed! 🎉"
    Description: "Thank you, John! Your reservation for 1 guest on Monday, November 25, 2024 at 07:30 PM has been confirmed. A confirmation email has been sent to john@example.com."

  * For multiple guests:

    Title: "Reservation Confirmed! 🎉"
    Description: "Thank you, John! Your reservation for 4 guests on Monday, November 25, 2024 at 07:30 PM has been confirmed. A confirmation email has been sent to john@example.com."
 */
