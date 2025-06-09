import {
  FORBIDDEN_MESSAGE,
  REQUEST_ERROR_MESSAGE,
  SERVER_ERROR_MESSAGE,
  UNAUTHORIZED_MESSAGE,
} from '@/shared/constants/defaultHttpErrorMessage';

export const getDefaultHttpErrorMessage = (httpStatus: number) => {
  const httpStatusStr = httpStatus.toString();
  if (httpStatusStr.startsWith('5')) {
    return SERVER_ERROR_MESSAGE;
  } else if (httpStatusStr.startsWith('4')) {
    switch (httpStatusStr) {
      case '401':
        return UNAUTHORIZED_MESSAGE;
      case '403':
        return FORBIDDEN_MESSAGE;
      default:
        return REQUEST_ERROR_MESSAGE;
    }
  } else {
    return '';
  }
};
