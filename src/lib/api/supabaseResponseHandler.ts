import { PostgrestSingleResponse } from '@supabase/supabase-js';
import { HttpError } from '@/shared/utils/HttpError';

type Callback<T> = (data: T) => T extends infer V ? V : T;

export const supabaseResponseHandler = <T>(
  res: PostgrestSingleResponse<T>,
  callback?: Callback<T>,
) => {
  const { data, error } = res;

  if (error) {
    const message = `PostgrestError[${error.code}]
      :${error.message}`;
    console.error(message);

    throw new HttpError(res.status, res.statusText);
  }

  return callback ? callback(data) : data;
};
