import { FallbackProps } from 'react-error-boundary';
import { CgRedo } from '@react-icons/all-files/cg/CgRedo';
import { HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import cn from '@utils/cn';
import { HttpError } from '@/shared/utils/HttpError';
import { IoIosWarning } from '@react-icons/all-files/io/IoIosWarning';

const RetryQueryMessageVariants = cva('flex-wrap', {
  variants: {
    size: {
      base: 'errorMessage-base',
      lg: 'errorMessage-lg',
      xl: 'errorMessage-xl',
    },
  },
  defaultVariants: {
    size: 'base',
  },
});

interface RetryQueryMessageProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof RetryQueryMessageVariants>,
    FallbackProps {}

const ErrorMessage = ({
  error,
  resetErrorBoundary,
  size,
  ...props
}: RetryQueryMessageProps) => {
  return (
    <div
      role='alert'
      className={cn(RetryQueryMessageVariants({ size }), props.className)}
    >
      {error instanceof HttpError ? (
        <>
          <p className='overflow-hidden text-ellipsis'>{error.message}</p>
          <button title='재시도' onClick={resetErrorBoundary}>
            <span className='sr-only'>재시도</span>
            <CgRedo aria-hidden={true} className='retryIcon' />
          </button>
        </>
      ) : (
        <>
          <p>오류가 발생했습니다. 담당자에게 문의해주세요.</p>
          <IoIosWarning />
        </>
      )}
    </div>
  );
};

export default ErrorMessage;
