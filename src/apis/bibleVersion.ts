import supabase from '@/lib/supabase';
import SupabaseResponseError from '@/lib/SupabaseResponseError';

export const getBibleVersions = async () => {
  const { data, error } = await supabase.from('bible_version').select();

  if (error) throw new SupabaseResponseError(error);

  return data;
};
