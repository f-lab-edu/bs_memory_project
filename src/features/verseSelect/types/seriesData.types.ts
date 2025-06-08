import { getSeries } from '@apis/series';
import { ApiResultType } from '@/shared/types/apiResult.type';
import { ArrayElement } from '@/shared/types/arrayElement.type';

export type SeriesDataTypes = ApiResultType<typeof getSeries>;
export type SeriesDatum = ArrayElement<SeriesDataTypes>;
