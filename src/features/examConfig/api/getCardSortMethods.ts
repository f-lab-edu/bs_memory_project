import supabase from '@/lib/supabase';
import SupabaseResponseError from '@/lib/SupabaseResponseError';
import { useSuspenseQuery } from '@tanstack/react-query';

export const getCardSortMethods = async () => {
  const { data, error } = await supabase.from('card_sort_method').select();

  if (error) throw new SupabaseResponseError(error);

  return data;
};

export const CARD_SORT_METHODS_QUERY_KEY = 'sortMethod';

export const useCardSortMethods = () => {
  return useSuspenseQuery({
    queryKey: [CARD_SORT_METHODS_QUERY_KEY],
    queryFn: getCardSortMethods,
  });
};
