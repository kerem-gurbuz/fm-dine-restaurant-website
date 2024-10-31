import { z } from 'zod';

export const MAX_GUESTS = 8; // TODO: Get this from API

/*
  Name Schema
  ------------------------------------------------------------------------
 */
const nameSchema = z
  .string()
  .min(1, { message: 'This field is required' })
  .min(2, { message: 'Name must be at least 2 characters long' })
  .max(50, { message: 'Name must be less than 50 characters' });

/* 
  Email Schema
  ------------------------------------------------------------------------
 */
const emailSchema = z
  .string()
  .min(1, { message: 'This field is required' })
  .email({ message: 'Please enter a valid email address' });

/* 
  Date Schema
  ------------------------------------------------------------------------
 */
const dateSchema = z
  .object({
    month: z
      .string()
      .min(1, { message: 'Month is required' })
      .max(2)
      .regex(/^(0?[1-9]|1[012])$/, {
        message: 'Please enter a valid month (1-12)',
      }),
    day: z
      .string()
      .min(1, { message: 'Day is required' })
      .max(2)
      .regex(/^(0?[1-9]|[12]\d|3[01])$/, {
        message: 'Please enter a valid day (1-31)',
      }),
    year: z
      .string()
      .min(4, { message: 'Year is required' })
      .max(4)
      .regex(/^\d{4}$/, { message: 'Please enter a valid year (YYYY)' }),
  })
  .refine(
    (data) => {
      // Check if all date fields are either filled or all empty
      const dateFields = [data.month, data.day, data.year];
      const filledFields = dateFields.filter((field) => field !== '');
      return filledFields.length === 0 || filledFields.length === 3;
    },
    {
      message: 'This field is incomplete',
      path: ['dateGroup'], // This will make the error appear at the date group level
    },
  )
  .refine(
    (data) => {
      if (!data.month || !data.day || !data.year) return true;

      // Convert strings to numbers for date validation
      const month = parseInt(data.month, 10);
      const day = parseInt(data.day, 10);
      const year = parseInt(data.year, 10);

      // Create date object and verify it's valid
      const date = new Date(year, month - 1, day);
      return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
      );
    },
    {
      message: 'Please enter a valid date',
      path: ['dateGroup'],
    },
  );

/* 
  Time Schema
  ------------------------------------------------------------------------
 */
const timeSchema = z
  .object({
    hour: z
      .string()
      .min(1, { message: 'Hour is required' })
      .max(2)
      .regex(/^(0?[1-9]|1[0-2])$/, {
        message: 'Please enter a valid hour (1-12)',
      }),
    minute: z
      .string()
      .min(1, { message: 'Minute is required' })
      .max(2)
      .regex(/^[0-5]?[0-9]$/, {
        message: 'Please enter a valid minute (00-59)',
      }),
    period: z.enum(['AM', 'PM'], {
      required_error: 'Please select AM or PM',
    }),
  })
  .refine(
    (data) => {
      // Check if all time fields are either filled or all empty
      const timeFields = [data.hour, data.minute];
      const filledFields = timeFields.filter((field) => field !== '');
      return (
        (filledFields.length === 0 || filledFields.length === 2) &&
        (filledFields.length === 0 || data.period)
      );
    },
    {
      message: 'This field is incomplete',
      path: ['timeGroup'], // This will make the error appear at the time group level
    },
  )
  .refine(
    (data) => {
      if (!data.hour || !data.minute || !data.period) return true;

      const hour = parseInt(data.hour, 10);
      const minute = parseInt(data.minute, 10);

      // Additional validation for AM/PM time
      if (data.period === 'AM' && hour === 12) {
        return minute >= 0; // 12 AM is valid
      }
      if (data.period === 'PM' && hour === 12) {
        return minute >= 0; // 12 PM is valid
      }
      return hour >= 1 && hour <= 11 && minute >= 0 && minute <= 59;
    },
    {
      message: 'Please enter a valid time',
      path: ['timeGroup'],
    },
  );

/* 
  Guest Schema
  ------------------------------------------------------------------------
 */
const guestsSchema = z
  .number()
  .min(1, { message: 'Minimum 1 guest required' })
  .max(MAX_GUESTS, { message: `Maximum ${MAX_GUESTS} guests allowed` });

/* 
  Booking Form Schema
  ------------------------------------------------------------------------
 */
export const bookingFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  date: dateSchema,
  time: timeSchema,
  guests: guestsSchema,
});

export type BookingFormData = z.infer<typeof bookingFormSchema>;
