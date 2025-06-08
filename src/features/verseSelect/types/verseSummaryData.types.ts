import { ApiResultType } from '@/shared/types/apiResult.type';
import { ArrayElement } from '@/shared/types/arrayElement.type';
import { getVersesSummary } from '@features/verseSelect/api/getVersesSummary';

export type VerseSummaryDataTypes = ApiResultType<typeof getVersesSummary>;
export type VerseSummaryDatum = ArrayElement<VerseSummaryDataTypes>;
export type VerseId = VerseSummaryDatum['idx'];
