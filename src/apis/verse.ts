import supabase from './supabase.ts';
import { BibleVersionName, SeriesCode } from './custom.types.ts';

export const getVersesSummary = async (seriesCode: SeriesCode) => {
  const { data, error } = await supabase
    .from('verse')
    .select(
      'idx,card_num,series_code,category,theme,chapter,verse1,verse2,bible_code(bible_name)',
    )
    .eq('series_code', seriesCode)
    .order('idx', { ascending: true });

  if (error) throw error;

  return data;
};

export const getVersesDetail = async (
  seriesCode: SeriesCode,
  bibleVersion: BibleVersionName,
) => {
  const { data: verse, error } = await supabase
    .from('verse')
    .select(
      `idx,card_num,series_code,category,theme,bible_code,chapter,verse1,verse2,
         ${bibleVersion === '개역개정판' ? 'verse_gae' : 'verse_kor'}`,
    )
    .eq('series_code', seriesCode);

  return { data: verse, error };
};
