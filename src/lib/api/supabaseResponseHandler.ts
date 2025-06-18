import { PostgrestSingleResponse } from '@supabase/supabase-js';
import { HttpError } from '@/shared/utils/HttpError';

export const supabaseResponseHandler = <T, U extends T = T>(
  res: PostgrestSingleResponse<T>,
  callback?: (data: T) => U,
): U => {
  const { data, error } = res;

  if (error) {
    const message = `PostgrestError[${error.code}]
      :${error.message}`;
    console.error(message);

    throw new HttpError(res.status, res.statusText);
  }

  return callback ? callback(data) : (data as U);
};
