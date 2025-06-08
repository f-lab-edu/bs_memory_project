import supabase from '@/lib/supabase';
import SupabaseResponseError from '@/lib/SupabaseResponseError';

export const getCardHideOption = async () => {
  const { data, error } = await supabase.from('card_hide_option').select();

  if (error) throw new SupabaseResponseError(error);

  return data;
};
