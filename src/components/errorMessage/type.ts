import { HTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { ErrorMessageVariants } from '@components/errorMessage/css/variants';

type ErrorMessagsePropsBase = HTMLAttributes<HTMLDivElement>;

export interface ErrorMessageProps
  extends VariantProps<typeof ErrorMessageVariants>,
    ErrorMessagsePropsBase {}
