import { createClient } from '@supabase/supabase-js';
import { SUPABASE_ANON_KEY, SUPABASE_URL } from '@/lib/supabase/supabaseConfig';
import { Database } from '@/types/database.types';

const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
