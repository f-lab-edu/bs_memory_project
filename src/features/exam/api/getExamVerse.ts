import { Verse } from '@/types/data.types';
import { BibleVersion } from '@utils/type';
import supabase from '@/lib/supabase';
import { useSuspenseQuery } from '@tanstack/react-query';
import { VerseId } from '@features/verseSelect/types/verseSummaryData.types';
import { supabaseResponseHandler } from '@/lib/api/supabaseResponseHandler';
import { BIBLE_VERSIONS } from '@/mock/mockData';

const getKorExamVerse = async (verseIds: Verse['idx'][], count: number) => {
  const res = await supabase
    .from('verse')
    .select(
      'idx,card_num,series_code(ord, series_name),category,theme,bible_code(bible_name,short_name),chapter,verse1,verse2,verse_kor',
    )
    .in('idx', [...verseIds])
    .limit(count);

  return supabaseResponseHandler(res, data =>
    data.map(v => ({ ...v, contents: v.verse_kor })),
  );
};
const getGaeExamVerse = async (verseIds: Verse['idx'][], count: number) => {
  const res = await supabase
    .from('verse')
    .select(
      'idx,card_num,series_code(ord, series_name),category,theme,bible_code(bible_name,short_name),chapter,verse1,verse2,verse_gae',
    )
    .in('idx', [...verseIds])
    .limit(count);

  return supabaseResponseHandler(res, data =>
    data.map(v => ({ ...v, contents: v.verse_gae })),
  );
};

const [BV_KOR, BV_GAE] = BIBLE_VERSIONS;

export const getExamVerse = async (
  verseIds: VerseId[],
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

export const EXAM_VERSES_QUERY_KEY = 'verseDetails';

export const useExamVerses = (
  verseIds: VerseId[],
  bibleVersion: BibleVersion,
  setCount: number,
) => {
  return useSuspenseQuery({
    queryKey: [EXAM_VERSES_QUERY_KEY, verseIds, bibleVersion, setCount],
    queryFn: () => getExamVerse(verseIds, bibleVersion, setCount),
  });
};
