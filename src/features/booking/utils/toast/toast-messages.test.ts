import type { BookingFormData } from '../../types';
import { generateBookingErrorMessage } from './toast-error';
import { ConflictError, ValidationError } from './toast-errors';
import { generateBookingSuccessMessage } from './toast-success';

/**
 * Test utility to validate toast message generation.
 * Useful for development and debugging purposes.
 */
export const testToastMessages = (): void => {
  // Sample test data
  const testData: BookingFormData = {
    name: 'John Doe',
    email: 'john@example.com',
    date: {
      month: '11',
      day: '25',
      year: '2024',
    },
    time: {
      hour: '07',
      minute: '30',
      period: 'PM',
    },
    guests: 4,
  };

  // Test success message
  console.log('Success Message:', generateBookingSuccessMessage(testData));

  // Test various error scenarios
  console.log(
    'Validation Error:',
    generateBookingErrorMessage(new ValidationError('Invalid data')),
  );

  console.log(
    'Conflict Error:',
    generateBookingErrorMessage(new ConflictError('Time slot taken'), testData),
  );

  console.log(
    'API Error:',
    generateBookingErrorMessage({ code: 'CAPACITY_EXCEEDED' }),
  );

  console.log(
    'Generic Error:',
    generateBookingErrorMessage(new Error('Unknown error')),
  );
};
