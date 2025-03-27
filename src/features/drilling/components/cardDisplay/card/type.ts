import { ApiResult, ArrayElement } from '@apis/custom.types';
import { getVersesDetail } from '@apis/verse';

export type VerseDetailDataList = ApiResult<typeof getVersesDetail>;
export type VerseDetailData = ArrayElement<VerseDetailDataList>;
