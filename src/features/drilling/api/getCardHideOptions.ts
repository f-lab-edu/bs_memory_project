import supabase from '@/lib/supabase';
import SupabaseResponseError from '@/lib/SupabaseResponseError';
import { useQuery } from '@tanstack/react-query';

export const getCardHideOptions = async () => {
  const { data, error } = await supabase.from('card_hide_option').select();

  if (error) throw new SupabaseResponseError(error);

  return data;
};

export const GET_CARD_HIDE_OPTIONS_QUERY_KEY = 'cardHideOption';

export const useCardHideOptions = () => {
  return useQuery({
    queryKey: [GET_CARD_HIDE_OPTIONS_QUERY_KEY],
    queryFn: getCardHideOptions,
  });
};
