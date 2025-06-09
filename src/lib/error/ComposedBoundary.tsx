import {
  ErrorBoundary,
  ErrorBoundaryPropsWithRender,
} from 'react-error-boundary';
import { ReactNode, Suspense } from 'react';
import { HttpError } from '@/shared/utils/HttpError';
import HTTP_STATUS_CODE from '@/shared/constants/httpStatusCode';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';

interface ComposedBoundaryProps extends ErrorBoundaryPropsWithRender {
  suspenseFallback: ReactNode;
  children: ReactNode;
  isThrowingAllowed?: boolean;
}

export const ComposedBoundary = ({
  suspenseFallback,
  children,
  fallbackRender,
  isThrowingAllowed = true,
}: ComposedBoundaryProps) => {
  const { reset } = useQueryErrorResetBoundary();

  const willThrowError = (error: unknown) => {
    return (
      isThrowingAllowed &&
      error instanceof HttpError &&
      error.status === HTTP_STATUS_CODE.ServiceUnavailable
    );
  };

  return (
    <ErrorBoundary
      onError={(error: unknown) => {
        if (error instanceof Error) console.error(error);
        if (willThrowError(error)) throw error;
      }}
      onReset={reset}
      fallbackRender={fallbackRender}
    >
      <Suspense fallback={suspenseFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
};
