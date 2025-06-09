import supabase from '@/lib/supabase';
import { useSuspenseQuery } from '@tanstack/react-query';
import { supabaseResponseHandler } from '@/lib/api/supabaseResponseHandler';

export const getExamExposeOptions = async () => {
  const res = await supabase.from('exam_expose_option').select();

  return supabaseResponseHandler(res);
};

export const EXAM_EXPOSE_OPTIONS_QUERY_KEY = 'exposeOption';

export const useExamExposeOptions = () => {
  return useSuspenseQuery({
    queryKey: [EXAM_EXPOSE_OPTIONS_QUERY_KEY],
    queryFn: getExamExposeOptions,
  });
};
