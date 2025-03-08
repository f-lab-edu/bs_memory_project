import { Tables } from './database.types.ts';

export type SeriesCode = Tables<'series'>['series_code'];
export type BibleVersionName = Tables<'bible_version'>['name'];

export type ApiResult<T extends (args?: any) => Promise<any>> = Awaited<
  ReturnType<T>
>;

export type ArrayElement<T> = T extends (infer U)[] ? U : never;
