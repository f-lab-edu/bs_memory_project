import supabase from '@/lib/supabase';
import SupabaseResponseError from '@/lib/SupabaseResponseError';

export const getCardSortMethod = async () => {
  const { data, error } = await supabase.from('card_sort_method').select();

  if (error) throw new SupabaseResponseError(error);

  return data;
};
