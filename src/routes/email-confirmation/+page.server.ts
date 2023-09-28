import type { PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ url }) => {
	// redirect to / if the user wasn't redirected here from /register
	if (url.searchParams.get("redirectedFrom") !== "/register") {
		throw redirect(302, "/");
	}
};
