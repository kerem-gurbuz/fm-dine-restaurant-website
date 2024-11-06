import { z } from 'zod';

import { bookingFormSchema } from '../schemas';

/**
 * Represents the structure of booking form data.
 * Contains all necessary information for a restaurant reservation.
 */
export type BookingFormData = z.infer<typeof bookingFormSchema>;
