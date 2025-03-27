import supabase from '@apis/supabase.ts';

export const getCardSortMethod = async () => {
  const { data, error } = await supabase.from('card_sort_method').select();

  if (error) throw error;

  return data;
};
