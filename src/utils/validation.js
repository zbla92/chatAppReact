export const VALIDATOR = {
  REQUIRED: {
    value: true,
    message: 'Required field.',
  },
  MIN_NUMBER_OF_CHAR: { value: 2, message: 'Minimum 2 characters long.' },
  MAX_NUMBER_OF_CHAR: { value: 32, message: 'Maximum 32 characters long.' },
  VALID_EMAIL: {
    value:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Invalid email address.',
  },
  PASSWORD_MIN_LENGTH: {
    value: 8,
    message: 'Password must be at least 8 characters long',
  },
};
