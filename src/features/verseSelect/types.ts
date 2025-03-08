import { getSeries } from '@apis/series.ts';
import { ApiResult, ArrayElement } from '@apis/custom.types.ts';
import { getVersesSummary } from '@apis/verse.ts';

export type SeriesData = ApiResult<typeof getSeries>;
export type SeriesDatum = ArrayElement<SeriesData>;

export type VerseSummaryData = ApiResult<typeof getVersesSummary>;
export type VerseSummaryDatum = ArrayElement<VerseSummaryData>;
export type VerseId = VerseSummaryDatum['idx'];
