import supabase from './supabase';
import { BibleVersion, SeriesCode, Verse } from './custom.types';

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
  verseIds: Verse['idx'][],
  bibleVersion: BibleVersion,
) => {
  return bibleVersion.code === 'BV_001'
    ? await getVersesDetailBV_001(verseIds)
    : await getVerseDetailBV_002(verseIds);
};

const getVersesDetailBV_001 = async (verseIds: Verse['idx'][]) => {
  const { data, error } = await supabase
    .from('verse')
    .select(
      'idx,card_num,series_code(ord, series_name),category,theme,bible_code(bible_name,short_name),chapter,verse1,verse2,verse_kor',
    )
    .in('idx', [...verseIds])
    .order('series_code(ord)', { ascending: true });

  if (error) throw error;

  return data.map(v => ({ ...v, contents: v.verse_kor }));
};

const getVerseDetailBV_002 = async (verseIds: Verse['idx'][]) => {
  const { data, error } = await supabase
    .from('verse')
    .select(
      'idx,card_num,series_code(ord, series_name),category,theme,bible_code(bible_name,short_name),chapter,verse1,verse2,verse_gae',
    )
    .in('idx', [...verseIds])
    .order('series_code(ord)', { ascending: true });

  if (error) throw error;

  return data.map(v => ({ ...v, contents: v.verse_gae }));
};
