import { PostgrestError } from '@supabase/supabase-js';

export default class SupabaseResponseError extends Error {
  constructor(error: PostgrestError) {
    const message = `PostgrestError[${error.code}]
      :${error.message}`;
    super(message);
  }
}
