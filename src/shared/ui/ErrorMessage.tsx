import cn from '@utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

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

interface ErrorMessageProps
  extends VariantProps<typeof ErrorMessageVariants>,
    HTMLAttributes<HTMLDivElement> {}

export function ErrorMessage({
  theme,
  size,
  weight,
  ...props
}: ErrorMessageProps) {
  return (
    <div
      className={cn(
        ErrorMessageVariants({ theme, size, weight }),
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}
