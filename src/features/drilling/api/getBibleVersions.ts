import supabase from '@/lib/supabase';
import SupabaseResponseError from '@/lib/SupabaseResponseError';
import { useQuery } from '@tanstack/react-query';

export const getBibleVersions = async () => {
  const { data, error } = await supabase.from('bible_version').select();

  if (error) throw new SupabaseResponseError(error);

  return data;
};

export const GET_BIBLE_VERSIONS_QUERY_KEY = 'bibleVersion';

export const useBibleVersions = () => {
  return useQuery({
    queryKey: [GET_BIBLE_VERSIONS_QUERY_KEY],
    queryFn: getBibleVersions,
  });
};
