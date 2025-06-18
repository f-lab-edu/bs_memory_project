import { setupServer } from 'msw/node';
import {
  getBibleVerseHandler,
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
  getBibleVerseHandler,
  getCardSortMethodHandler,
  getCardHideOptionHandler,
  getVerseDetailHandler,
];

export const server = setupServer(...handlers);
