import supabase from '@/lib/supabase';
import { supabaseResponseHandler } from '@/lib/api/supabaseResponseHandler';

export const getSeries = async () => {
  const res = await supabase
    .from('series')
    .select('series_code,series_name,category,sub_series_opt,ord,parent_series')
    .is('parent_series', null)
    .order('ord', { ascending: true });

  return supabaseResponseHandler(res);
};
