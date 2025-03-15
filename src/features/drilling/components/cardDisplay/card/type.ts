import { ApiResult, ArrayElement } from '@apis/custom.types.ts';
import { getVersesDetail } from '@apis/verse.ts';

export type VerseDetailDataList = ApiResult<typeof getVersesDetail>;
export type VerseDetailData = ArrayElement<VerseDetailDataList>;
