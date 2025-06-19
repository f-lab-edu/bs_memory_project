import { setupServer } from 'msw/node';
import {
  getBibleVersionsHandler,
  getCardHideOptionHandler,
  getCardSortMethodHandler,
  getSeriesHandler,
  getSubSeriesHandler,
  getVerseDetailHandler,
  getVerseSummaryHandler,
} from '@/mock/handler';

export const handlers = [
  getSeriesHandler,
  getSubSeriesHandler,
  getVerseSummaryHandler,
  getCardSortMethodHandler,
  getCardHideOptionHandler,
  getVerseDetailHandler,
  getBibleVersionsHandler,
];

export const server = setupServer(...handlers);
