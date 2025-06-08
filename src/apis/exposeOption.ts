import supabase from '@/lib/supabase';
import SupabaseResponseError from '@/lib/SupabaseResponseError';

export const getExamExposeOptions = async () => {
  const { data, error } = await supabase.from('exam_expose_option').select();

  if (error) throw new SupabaseResponseError(error);

  return data;
};
