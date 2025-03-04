import supabase from './supabase.ts';
import { SeriesCode } from './custom.types.ts';

export const getSeries = async () => {
  const { data, error } = await supabase
    .from('series')
    .select('series_code,series_name,category,sub_series_opt,ord,parent_series')
    .is('parent_series', null)
    .order('ord', { ascending: true });

  if (error) throw error;

  return data;
};

export const getSubSeries = async (series_code: SeriesCode) => {
  const { data, error } = await supabase
    .from('series')
    .select(
      'series_code,category:series_name, series_name:category,sub_series_opt,ord,parent_series',
    )
    .eq('parent_series', series_code)
    .order('ord', { ascending: true });

  if (error) throw error;

  return data;
};
