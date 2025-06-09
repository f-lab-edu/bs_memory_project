import supabase from '@/lib/supabase';
import { useSuspenseQuery } from '@tanstack/react-query';
import { supabaseResponseHandler } from '@/lib/api/supabaseResponseHandler';

export const getBibleVersions = async () => {
  const res = await supabase.from('bible_version').select();

  return supabaseResponseHandler(res);
};

export const GET_BIBLE_VERSIONS_QUERY_KEY = 'bibleVersion';

export const useBibleVersions = () => {
  return useSuspenseQuery({
    queryKey: [GET_BIBLE_VERSIONS_QUERY_KEY],
    queryFn: getBibleVersions,
  });
};
