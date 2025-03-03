import { BibleVersionName, SeriesRowData } from '../../database.types.ts';
import supabase from './supabase.ts';

export const getVersesSummary = async (
  seriesCode: SeriesRowData['series_code'],
) => {
  const { data: verse, error } = await supabase
    .from('verse')
    .select(
      'idx,card_num,series_code,category,theme,bible_code,chapter,verse1,verse2',
    )
    .eq('series_code', seriesCode!);

  return { data: verse, error };
};

export const getVersesDetail = async (
  seriesCode: SeriesRowData['series_code'],
  bibleVersion: BibleVersionName,
) => {
  const { data: verse, error } = await supabase
    .from('verse')
    .select(
      `idx,card_num,series_code,category,theme,bible_code,chapter,verse1,verse2,
         ${bibleVersion === '개역개정판' ? 'verse_gae' : 'verse_kor'}`,
    )
    .eq('series_code', seriesCode!);

  return { data: verse, error };
};
