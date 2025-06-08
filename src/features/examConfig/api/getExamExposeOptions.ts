import supabase from '@/lib/supabase';
import SupabaseResponseError from '@/lib/SupabaseResponseError';
import { useSuspenseQuery } from '@tanstack/react-query';

export const getExamExposeOptions = async () => {
  const { data, error } = await supabase.from('exam_expose_option').select();

  if (error) throw new SupabaseResponseError(error);

  return data;
};

export const EXAM_EXPOSE_OPTIONS_QUERY_KEY = 'exposeOption';

export const useExamExposeOptions = () => {
  return useSuspenseQuery({
    queryKey: [EXAM_EXPOSE_OPTIONS_QUERY_KEY],
    queryFn: getExamExposeOptions,
  });
};
