'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { MinusIcon, PlusIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  bookingFormSchema,
  MAX_GUESTS,
  type BookingFormData,
} from '@/lib/schemas/booking-form.schema';
import { cn } from '@/lib/utils';

type BookingFormProps = {
  className?: string;
};

export function BookingForm({ className }: BookingFormProps) {
  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: '',
      email: '',
      date: { month: '', day: '', year: '' },
      time: { hour: '', minute: '', period: 'AM' },
      guests: 1,
    },
  });

  const { errors, isSubmitting } = form.formState;

  const onSubmit = async (data: BookingFormData) => {
    try {
      // Submit data to the API here
      console.log('Form data:', data);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Reset form after successful submission
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Form {...form}>
      <form
        id="booking-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(
          'bg-white text-cod-gray shadow-dine',
          'space-y-[34px] p-8 pt-[34px] md:p-12 md:pt-[50px]',
          className,
        )}
      >
        {/* Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" autoComplete="off" {...field} />
              </FormControl>
              <FormMessage className="pl-4 pt-3" />
            </FormItem>
          )}
        />
        {/* ---------------------------------------------------------------- */}
        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" autoComplete="off" {...field} />
              </FormControl>
              <FormMessage className="pl-4 pt-3" />
            </FormItem>
          )}
        />
        {/* ---------------------------------------------------------------- */}
        {/* Date Fields */}
        <div className="flex flex-col gap-2 md:flex-row md:gap-[65px]">
          {/* Date Group Label */}
          <div className="text-left">
            <p
              aria-label="date-group-label"
              className={cn('text-[20px] font-normal leading-[28px]', {
                'text-dusty-rose':
                  errors.date?.day || errors.date?.month || errors.date?.year,
              })}
            >
              Pick a date
            </p>
            {/* Date Group Message */}
            {errors.date &&
              'dateGroup' in errors.date &&
              (errors.date?.day || errors.date?.month || errors.date?.year) && (
                <p
                  aria-label="date-group-message"
                  className="hidden text-[10px] font-medium leading-[10px] tracking-[-0.13px] text-dusty-rose md:block"
                >
                  {(errors.date.dateGroup as { message: string }).message}
                </p>
              )}
          </div>
          <div className="grid flex-1 grid-cols-[1fr_1fr_minmax(88px,1fr)] gap-[14px] md:grid-cols-[1fr_1fr_minmax(97px,1fr)] md:gap-[16px]">
            <FormField
              control={form.control}
              name="date.month"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="MM"
                      maxLength={2}
                      autoComplete="off"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="pt-3" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date.day"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="DD"
                      maxLength={2}
                      autoComplete="off"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="pt-3" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date.year"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="YYYY"
                      maxLength={4}
                      autoComplete="off"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="pt-3" />
                </FormItem>
              )}
            />
          </div>
        </div>
        {/* ---------------------------------------------------------------- */}
        {/* Time Fields */}
        <div className="flex flex-col gap-2 md:flex-row md:gap-[65px]">
          {/* Time Group Label */}
          <div className="text-left">
            <p
              aria-label="time-group-label"
              className={cn('text-[20px] font-normal leading-[28px]', {
                'text-dusty-rose':
                  errors.time?.hour ||
                  errors.time?.minute ||
                  errors.time?.period,
              })}
            >
              Pick a time
            </p>
            {/* Time Group Message */}
            {errors.time &&
              'timeGroup' in errors.time &&
              (errors.time?.hour ||
                errors.time?.minute ||
                errors.time?.period) && (
                <p
                  aria-label="time-group-message"
                  className="hidden text-[10px] font-medium leading-[10px] tracking-[-0.13px] text-dusty-rose md:block"
                >
                  {(errors.time.timeGroup as { message: string }).message}
                </p>
              )}
          </div>
          <div className="grid flex-1 grid-cols-[1fr_1fr_minmax(88px,1fr)] gap-[14px] md:grid-cols-[1fr_1fr_minmax(97px,1fr)] md:gap-[16px]">
            <FormField
              control={form.control}
              name="time.hour"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="09"
                      maxLength={2}
                      autoComplete="off"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="pt-3" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="time.minute"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="00"
                      maxLength={2}
                      autoComplete="off"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="pt-3" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="time.period"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger aria-label="Select time period">
                        <SelectValue placeholder="AM" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="AM">AM</SelectItem>
                      <SelectItem value="PM">PM</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="pt-3" />
                </FormItem>
              )}
            />
          </div>
        </div>
        {/* ---------------------------------------------------------------- */}
        {/* Guests Field */}
        <div className="h-[41px] border-b border-cod-gray/50 pb-[17px] text-[20px] font-bold leading-[24px] hover:border-cod-gray focus-visible:outline-none">
          <p aria-label="guests-label" className="sr-only">
            Number of guests
          </p>
          <div className="flex justify-between">
            <Button
              aria-label="Remove guests"
              type="button"
              variant="ghost"
              className="h-6 w-6 px-6"
              disabled={form.watch('guests') === 1}
              onClick={() => {
                const currentGuests = form.getValues('guests');
                if (currentGuests > 1) {
                  form.setValue('guests', currentGuests - 1);
                }
              }}
            >
              <MinusIcon />
            </Button>
            <span className="text-[20px] font-bold leading-[24px] tracking-[-0.25px]">
              {form.watch('guests')} people
            </span>
            <Button
              aria-label="Add guests"
              type="button"
              variant="ghost"
              className="h-6 w-6 px-6"
              disabled={form.watch('guests') === MAX_GUESTS}
              onClick={() => {
                const currentGuests = form.getValues('guests');
                if (currentGuests < MAX_GUESTS) {
                  form.setValue('guests', currentGuests + 1);
                }
              }}
            >
              <PlusIcon />
            </Button>
          </div>
        </div>
        {/* ---------------------------------------------------------------- */}
        {/* Submit Button */}
        <Button
          type="submit"
          size="dine-default"
          variant="dine--light"
          className="w-full bg-cod-gray hover:border-cod-gray"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Making Reservation...' : 'Make Reservation'}
        </Button>
      </form>
    </Form>
  );
}
