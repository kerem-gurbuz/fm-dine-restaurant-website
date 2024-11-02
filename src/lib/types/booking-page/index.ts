import { z } from 'zod';

import { bookingFormSchema } from '@/lib/schemas/booking-form.schema';

/**
 * Represents the structure of booking form data.
 * Contains all necessary information for a restaurant reservation.
 */
export type BookingFormData = z.infer<typeof bookingFormSchema>;
