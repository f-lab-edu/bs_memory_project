import supabase from '@apis/supabase';

export const getCardHideOption = async () => {
  const { data, error } = await supabase.from('card_hide_option').select();

  if (error) throw error;

  return data;
};
