const DEFAULT_APP_ERROR_MESSAGE =
  '서비스 오류가 발생했습니다. 담당자에게 문의해주세요.';

export class ApplicationError extends Error {
  cause: string;

  constructor(cause: string, message?: string) {
    super(`${message ?? DEFAULT_APP_ERROR_MESSAGE}`.trim());
    this.name = 'ApplicationError';
    this.cause = cause;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApplicationError);
    }
  }
}
