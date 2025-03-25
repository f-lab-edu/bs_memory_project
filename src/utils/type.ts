import { ApiResult, ArrayElement } from '@apis/custom.types';
import { getBibleVersions } from '@apis/bibleVersion';

export type BibleVersions = ApiResult<typeof getBibleVersions>;
export type BibleVersion = ArrayElement<BibleVersions>;
