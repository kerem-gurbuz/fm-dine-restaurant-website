/**
 * Custom error for validation failures in the booking process.
 * Thrown when submitted data doesn't meet the required format or rules.
 */
export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

/**
 * Custom error for booking time conflicts.
 * Thrown when the requested time slot is already taken or unavailable.
 */
export class ConflictError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ConflictError';
  }
}

/**
 * Custom error for network-related issues.
 * Thrown when there are connectivity problems during the booking process.
 */
export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NetworkError';
  }
}

/**
 * Custom error for request timeout situations.
 * Thrown when the booking request takes too long to process.
 */
export class TimeoutError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TimeoutError';
  }
}
