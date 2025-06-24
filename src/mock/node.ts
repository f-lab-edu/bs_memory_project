import { setupServer } from 'msw/node';
import {
  getBibleVersionsHandler,
  getCardHideOptionsHandler,
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
  getVerseDetailHandler,
  getBibleVersionsHandler,
  getCardHideOptionsHandler,
];

export const server = setupServer(...handlers);
