import { createClient } from "@supabase/supabase-js";
import { SECRET_SUPABASE_SERVICE_ROLE_KEY, SECRET_SUPABASE_URL } from "$env/static/private";
import type { Database } from "$lib/supabase/database.types";

export const supabase = createClient<Database>(
	SECRET_SUPABASE_URL,
	SECRET_SUPABASE_SERVICE_ROLE_KEY
);
