import { SECRET_SUPABASE_SERVICE_ROLE_KEY, SECRET_SUPABASE_URL } from "$env/static/private";
import { createSupabaseServerClient } from "@supabase/auth-helpers-sveltekit";
import type { Handle } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";

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

	if (event.url.pathname.startsWith("/login") || event.url.pathname.startsWith("/register")) {
		if (await event.locals.getSession()) {
			throw redirect(302, "/");
		}
	}

	if (event.url.pathname.startsWith("/logout") || event.url.pathname.startsWith("/account")) {
		if (!(await event.locals.getSession())) {
			throw redirect(302, "/login");
		}
	}

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === "content-range";
		}
	});
};
