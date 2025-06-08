import { SeriesCode } from '@/types/data.types';
import supabase from '@/lib/supabase';
import SupabaseResponseError from '@/lib/SupabaseResponseError';
import { useSuspenseQuery } from '@tanstack/react-query';

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

export const VERSES_SUMMARY_QUERY_KEY = 'verseSummaryData';

export const useVersesSummary = (seriesCode: SeriesCode) => {
  return useSuspenseQuery({
    queryKey: [VERSES_SUMMARY_QUERY_KEY, seriesCode],
    queryFn: () => getVersesSummary(seriesCode),
  });
};
