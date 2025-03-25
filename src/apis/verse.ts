import supabase from './supabase';
import { SeriesCode, Verse } from './custom.types';
import { BibleVersion } from '@utils/type';
import { BIBLE_VERSIONS } from '@utils/constants';
import SupabaseResponseError from '@apis/utils/SupabaseResponseError';

export const getVersesSummary = async (seriesCode: SeriesCode) => {
  const { data, error } = await supabase
    .from('verse')
    .select(
      'idx,card_num,series_code,category,theme,chapter,verse1,verse2,bible_code(bible_name)',
    )
    .eq('series_code', seriesCode)
    .order('idx', { ascending: true });

  if (error) throw new SupabaseResponseError(error);

  return data;
};

const [BV_KOR, BV_GAE] = [BIBLE_VERSIONS[0], BIBLE_VERSIONS[1]];

export const getVersesDetail = async (
  verseIds: Verse['idx'][],
  bibleVersion: BibleVersion,
) => {
  if (bibleVersion.code === BV_KOR.code) {
    return await getKorVersesDetail(verseIds);
  } else if (bibleVersion.code === BV_GAE.code) {
    return await getGaeVersesDetail(verseIds);
  } else {
    throw new Error(`Unknown Bible Version: ${bibleVersion.code}`);
  }
};

const getKorVersesDetail = async (verseIds: Verse['idx'][]) => {
  const { data, error } = await supabase
    .from('verse')
    .select(
      'idx,card_num,series_code(ord, series_name),category,theme,bible_code(bible_name,short_name),chapter,verse1,verse2,verse_kor',
    )
    .in('idx', [...verseIds])
    .order('series_code(ord)', { ascending: true });

  if (error) throw new SupabaseResponseError(error);

  return data.map(v => ({ ...v, contents: v.verse_kor }));
};

const getGaeVersesDetail = async (verseIds: Verse['idx'][]) => {
  const { data, error } = await supabase
    .from('verse')
    .select(
      'idx,card_num,series_code(ord, series_name),category,theme,bible_code(bible_name,short_name),chapter,verse1,verse2,verse_gae',
    )
    .in('idx', [...verseIds])
    .order('series_code(ord)', { ascending: true });

  if (error) throw new SupabaseResponseError(error);

  return data.map(v => ({ ...v, contents: v.verse_gae }));
};
