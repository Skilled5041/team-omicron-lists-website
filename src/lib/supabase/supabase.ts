import { createClient } from "@supabase/supabase-js";
import { SECRET_SUPABASE_SERVICE_ROLE_KEY, SECRET_SUPABASE_URL } from "$env/static/private";

export const supabase = createClient(SECRET_SUPABASE_URL, SECRET_SUPABASE_SERVICE_ROLE_KEY);
