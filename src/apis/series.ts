import supabase from './supabase.ts';

export const getSeries = async () => {
  const { data: series, error } = await supabase
    .from('series')
    .select('series_code,series_name,category,ord')
    .range(1, 23);

  return { data: series, error };
};
