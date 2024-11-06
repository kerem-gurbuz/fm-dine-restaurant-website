/**
 * Standard structure for toast notification messages.
 * Used for both success and error notifications.
 */
export type ToastMessage = {
  /** Main heading of the toast notification */
  title: string;
  /** Detailed message content */
  description: string;
  /** Visual style variant of the toast */
  variant?: 'dine--success' | 'dine--destructive';
};
