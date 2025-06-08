import { getVersesSummary } from '@apis/verse';
import { ApiResultType } from '@/shared/types/apiResult.type';
import { ArrayElement } from '@/shared/types/arrayElement.type';

export type VerseSummaryDataTypes = ApiResultType<typeof getVersesSummary>;
export type VerseSummaryDatum = ArrayElement<VerseSummaryDataTypes>;
export type VerseId = VerseSummaryDatum['idx'];
