import { ApiResultType } from '@/shared/types/apiResult.type';
import { ArrayElement } from '@/shared/types/arrayElement.type';
import { getBibleVersions } from '@features/bibleVersionSelect/api/getBibleVersions';

export type BibleVersions = ApiResultType<typeof getBibleVersions>;
export type BibleVersion = ArrayElement<BibleVersions>;
