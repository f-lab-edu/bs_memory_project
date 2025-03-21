import supabase from '@apis/supabase';
import { BibleVersion, Verse } from '@apis/custom.types';

const getExamVerseBV_001 = async (verseIds: Verse['idx'][], count: number) => {
  const { data, error } = await supabase
    .from('verse')
    .select(
      'idx,card_num,series_code(ord, series_name),category,theme,bible_code(bible_name,short_name),chapter,verse1,verse2,verse_kor',
    )
    .in('idx', [...verseIds])
    .limit(count);

  if (error) throw error;

  return data.map(v => ({ ...v, contents: v.verse_kor }));
};

const getExamVerseBV_002 = async (verseIds: Verse['idx'][], count: number) => {
  const { data, error } = await supabase
    .from('verse')
    .select(
      'idx,card_num,series_code(ord, series_name),category,theme,bible_code(bible_name,short_name),chapter,verse1,verse2,verse_gae',
    )
    .in('idx', [...verseIds])
    .limit(count);
  // .order('series_code(ord)', { ascending: true });

  if (error) throw error;

  return data.map(v => ({ ...v, contents: v.verse_gae }));
};

export const getExamVerse = async (
  verseIds: Verse['idx'][],
  bibleVersion: BibleVersion,
  count: number,
) => {
  return bibleVersion.code === 'BV_001'
    ? await getExamVerseBV_001(verseIds, count)
    : await getExamVerseBV_002(verseIds, count);
};
