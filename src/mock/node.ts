import { setupServer } from 'msw/node';
import {
  getBibleVerseHandler,
  getCardHideOptionHandler,
  getCardSortMethodHandler,
  getSeriesHandler,
  getSubSeriesHandler,
  getVerseSummaryHandler,
} from '@/mock/handler';

export const handlers = [
  getSeriesHandler,
  getSubSeriesHandler,
  getVerseSummaryHandler,
  getBibleVerseHandler,
  getCardSortMethodHandler,
  getCardHideOptionHandler,
];

export const server = setupServer(...handlers);
