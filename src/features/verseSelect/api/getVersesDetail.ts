import { Verse } from '@/types/data.types';
import { BibleVersion } from '@utils/type';
import supabase from '@/lib/supabase';
import SupabaseResponseError from '@/lib/SupabaseResponseError';
import { BIBLE_VERSIONS } from '@utils/constants';
import { useSuspenseQuery } from '@tanstack/react-query';

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

const { KOR: BV_KOR, GAE: BV_GAE } = BIBLE_VERSIONS;

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

export const VERSES_DETAIL_QUERY_KEY = 'verseDetails';

export const useVersesDetail = (
  verseIds: Verse['idx'][],
  bibleVersion: BibleVersion,
) => {
  return useSuspenseQuery({
    queryKey: [VERSES_DETAIL_QUERY_KEY, verseIds, bibleVersion],
    queryFn: () => getVersesDetail(verseIds, bibleVersion),
  });
};
