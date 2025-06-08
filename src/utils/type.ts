import { getBibleVersions } from '@apis/bibleVersion';
import { ApiResultType } from '@/shared/types/apiResult.type';
import { ArrayElement } from '@/shared/types/arrayElement.type';

export type BibleVersions = ApiResultType<typeof getBibleVersions>;
export type BibleVersion = ArrayElement<BibleVersions>;
