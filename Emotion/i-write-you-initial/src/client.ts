import { createClient } from '@supabase/supabase-js';
import { Database } from './types/Database';

const SUPABASE_URL = import.meta.env.SUPABASE_URL
  ? import.meta.env.SUPABASE_URL
  : '';
const SUPABASE_KEY = import.meta.env.SUPABASE_KEY
  ? import.meta.env.SUPABASE_KEY
  : '';
export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);
