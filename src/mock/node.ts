import { setupServer } from 'msw/node';
import {
  getSeriesHandler,
  getSubSeriesHandler,
  getVerseSummaryHandler,
} from '@/mock/handler.ts';

export const handlers = [
  getSeriesHandler,
  getSubSeriesHandler,
  getVerseSummaryHandler,
];

export const server = setupServer(...handlers);
