import { cva } from 'class-variance-authority';

export const ErrorMessageVariants = cva(`font-semibold leading-loose`, {
  variants: {
    theme: {
      neutral: 'text-gray-500',
      warn: 'text-danger',
    },
    size: {
      sm: 'text-sm',
      base: 'text-lg mobile:text-base',
    },
    weight: {
      default: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    theme: 'neutral',
    size: 'base',
    weight: 'default',
  },
});
