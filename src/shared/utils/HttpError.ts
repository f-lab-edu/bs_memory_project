export class HttpError extends Error {
  status: number;
  statusText?: string;

  constructor(status: number, statusText?: string, errorMessage?: string) {
    super(`${errorMessage ?? '오류가 발생했습니다.'}`.trim());
    this.name = 'HttpError';
    this.status = status;
    this.statusText = statusText;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, HttpError);
    }
  }
}
