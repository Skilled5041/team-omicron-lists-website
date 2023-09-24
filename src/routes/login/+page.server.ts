import type { Actions } from "./$types";
import { fail, redirect } from "@sveltejs/kit";

export const actions = {
	login: async ({ request, locals: { supabase } }) => {
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

		const formData = await request.formData();
		const email = formData.get("email") as string;
		const password = formData.get("password") as string;

		if (!emailRegex.test(email)) {
			return fail(400, { message: "Invalid email address", emailError: true });
		}

		const { error } = await supabase.auth.signInWithPassword({
			email,
			password
		});

		if (error) {
			if (error.status !== 500) {
				return fail(400, { message: "Invalid email or password.", error: true });
			}
			return fail(500, { message: "Internal Server Error", error: true });
		}

		throw redirect(303, "/");
	}
} satisfies Actions;
