import supabase from '@apis/supabase.ts';

export const getExamExposeOptions = async () => {
  const { data, error } = await supabase.from('exam_expose_option').select();

  if (error) throw error;

  return data;
};
