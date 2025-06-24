import supabase from '@/lib/supabase';
import { useSuspenseQuery } from '@tanstack/react-query';
import { supabaseResponseHandler } from '@/lib/api/supabaseResponseHandler';

export const getCardHideOptions = async () => {
  const res = await supabase.from('card_hide_option').select();

  return supabaseResponseHandler(res);
};

export const GET_CARD_HIDE_OPTIONS_QUERY_KEY = 'cardHideOption';

export const useCardHideOptions = () => {
  return useSuspenseQuery({
    queryKey: [GET_CARD_HIDE_OPTIONS_QUERY_KEY],
    queryFn: getCardHideOptions,
  });
};
