import { ApiResultType } from '@/shared/types/apiResult.type';
import { ArrayElement } from '@/shared/types/arrayElement.type';
import { getSeries } from '@features/verseSelect/api/getSeries';

export type SeriesDataTypes = ApiResultType<typeof getSeries>;
export type SeriesDatum = ArrayElement<SeriesDataTypes>;
