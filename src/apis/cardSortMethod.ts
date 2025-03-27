import supabase from '@apis/supabase';
import SupabaseResponseError from '@apis/utils/SupabaseResponseError';

export const getCardSortMethod = async () => {
  const { data, error } = await supabase.from('card_sort_method').select();

  if (error) throw new SupabaseResponseError(error);

  return data;
};
