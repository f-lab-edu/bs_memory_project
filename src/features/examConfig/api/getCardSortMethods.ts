import supabase from '@/lib/supabase';
import { useSuspenseQuery } from '@tanstack/react-query';
import { supabaseResponseHandler } from '@/lib/api/supabaseResponseHandler';

export const getCardSortMethods = async () => {
  const res = await supabase.from('card_sort_method').select();

  return supabaseResponseHandler(res);
};

export const CARD_SORT_METHODS_QUERY_KEY = 'sortMethod';

export const useCardSortMethods = () => {
  return useSuspenseQuery({
    queryKey: [CARD_SORT_METHODS_QUERY_KEY],
    queryFn: getCardSortMethods,
  });
};
