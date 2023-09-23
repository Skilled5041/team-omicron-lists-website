import { SECRET_SUPABASE_SERVICE_ROLE_KEY, SECRET_SUPABASE_URL } from "$env/static/private";
import { createSupabaseServerClient } from "@supabase/auth-helpers-sveltekit";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.supabase = createSupabaseServerClient({
		supabaseUrl: SECRET_SUPABASE_URL,
		supabaseKey: SECRET_SUPABASE_SERVICE_ROLE_KEY,
		event
	});

	event.locals.getSession = async () => {
		const {
			data: { session }
		} = await event.locals.supabase.auth.getSession();
		return session;
	};

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === "content-range";
		}
	});
};
