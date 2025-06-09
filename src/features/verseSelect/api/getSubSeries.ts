import { SeriesCode } from '@/types/data.types';
import supabase from '@/lib/supabase';
import SupabaseResponseError from '@/lib/SupabaseResponseError';
import { useSuspenseQuery } from '@tanstack/react-query';

export const getSubSeries = async (series_code: SeriesCode) => {
  const { data, error } = await supabase
    .from('series')
    .select(
      'series_code,category:series_name, series_name:category,sub_series_opt,ord,parent_series',
    )
    .eq('parent_series', series_code)
    .order('ord', { ascending: true });

  if (error) throw new SupabaseResponseError(error);

  return data;
};

export const SUB_SERIES_QUERY_KEY = 'subSeriesData';

export const useSubSeries = (seriesCode: SeriesCode) => {
  return useSuspenseQuery({
    queryKey: [SUB_SERIES_QUERY_KEY, seriesCode],
    queryFn: () => getSubSeries(seriesCode),
  });
};
