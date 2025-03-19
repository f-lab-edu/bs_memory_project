import { getSeries } from '@apis/series';
import { ApiResult, ArrayElement } from '@apis/custom.types';
import { getVersesSummary } from '@apis/verse';

export type SeriesData = ApiResult<typeof getSeries>;
export type SeriesDatum = ArrayElement<SeriesData>;

export type VerseSummaryData = ApiResult<typeof getVersesSummary>;
export type VerseSummaryDatum = ArrayElement<VerseSummaryData>;
export type VerseId = VerseSummaryDatum['idx'];
