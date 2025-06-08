import { getVersesDetail } from '@apis/verse';
import { ApiResultType } from '@/shared/types/apiResult.type';
import { ArrayElement } from '@/shared/types/arrayElement.type';

export type VerseDetailDataList = ApiResultType<typeof getVersesDetail>;
export type VerseDetailData = ArrayElement<VerseDetailDataList>;
