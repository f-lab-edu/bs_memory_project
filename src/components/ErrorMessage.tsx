import { HTMLAttributes } from 'react';
import cn from '@utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';

const ErrorMessageVariants = cva(`font-semibold leading-loose`, {
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

type ErrorMessagsePropsBase = HTMLAttributes<HTMLDivElement>;

interface ErrorMessageProps
  extends VariantProps<typeof ErrorMessageVariants>,
    ErrorMessagsePropsBase {
  children: React.ReactNode;
}

function ErrorMessage({
  theme,
  size,
  weight,
  children,
  ...props
}: ErrorMessageProps) {
  return (
    <div
      className={cn(
        ErrorMessageVariants({ theme, size, weight }),
        props.className,
      )}
    >
      {children}
    </div>
  );
}

export default ErrorMessage;
