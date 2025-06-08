import supabase from '@/lib/supabase';
import SupabaseResponseError from '@/lib/SupabaseResponseError';

export const getSeries = async () => {
  const { data, error } = await supabase
    .from('series')
    .select('series_code,series_name,category,sub_series_opt,ord,parent_series')
    .is('parent_series', null)
    .order('ord', { ascending: true });

  if (error) throw new SupabaseResponseError(error);

  return data;
};
