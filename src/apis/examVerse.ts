import supabase from '@apis/supabase';
import { Verse } from '@apis/custom.types';
import { BIBLE_VERSIONS } from '@utils/constants';
import { BibleVersion } from '@utils/type';
import SupabaseResponseError from '@apis/utils/SupabaseResponseError';

const getKorExamVerse = async (verseIds: Verse['idx'][], count: number) => {
  const { data, error } = await supabase
    .from('verse')
    .select(
      'idx,card_num,series_code(ord, series_name),category,theme,bible_code(bible_name,short_name),chapter,verse1,verse2,verse_kor',
    )
    .in('idx', [...verseIds])
    .limit(count);

  if (error) throw new SupabaseResponseError(error);

  return data.map(v => ({ ...v, contents: v.verse_kor }));
};

const getGaeExamVerse = async (verseIds: Verse['idx'][], count: number) => {
  const { data, error } = await supabase
    .from('verse')
    .select(
      'idx,card_num,series_code(ord, series_name),category,theme,bible_code(bible_name,short_name),chapter,verse1,verse2,verse_gae',
    )
    .in('idx', [...verseIds])
    .limit(count);

  if (error) throw new SupabaseResponseError(error);

  return data.map(v => ({ ...v, contents: v.verse_gae }));
};

const { KOR: BV_KOR, GAE: BV_GAE } = BIBLE_VERSIONS;

export const getExamVerse = async (
  verseIds: Verse['idx'][],
  bibleVersion: BibleVersion,
  count: number,
) => {
  if (bibleVersion.code === BV_KOR.code) {
    return await getKorExamVerse(verseIds, count);
  } else if (bibleVersion.code === BV_GAE.code) {
    return await getGaeExamVerse(verseIds, count);
  } else {
    throw new Error(`Unknown Bible Version: ${bibleVersion.code}`);
  }
};
