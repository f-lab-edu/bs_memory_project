import { Tables } from './database.types';

export type SeriesCode = Tables<'series'>['series_code'];

export type Verse = Tables<'verse'>;

export type ApiResult<T extends (...args: any) => Promise<any>> = Awaited<
  ReturnType<T>
>;

export type ArrayElement<T> = T extends (infer U)[] ? U : never;
