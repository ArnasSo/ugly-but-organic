import { createClient } from "@supabase/supabase-js";

// get supabase credentials from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

// create supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);