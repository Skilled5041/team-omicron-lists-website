import type { Actions } from "./$types";
import { fail, redirect } from "@sveltejs/kit";

export const actions = {
	register: async ({ request, locals: { supabase } }) => {
		const usernameRegex = /^[a-zA-Z0-9]{3,24}$/;
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

		const formData = await request.formData();
		const username = formData.get("username") as string;
		const email = formData.get("email") as string;
		const password = formData.get("password") as string;

		if (!usernameRegex.test(username)) {
			return fail(400, {
				message:
					"Username must contain only letters and numbers and be 3 to 24 characters long",
				usernameError: true
			});
		}

		if (!emailRegex.test(email)) {
			return fail(400, { message: "Invalid email address", emailError: true });
		}

		if (!passwordRegex.test(password)) {
			return fail(400, {
				message:
					"Password must be at least 8 characters long and contain at least one letter and one number",
				passwordError: true
			});
		}

		const { error } = await supabase.auth.admin.createUser({
			email,
			password,
			user_metadata: { username },
		});

		// Username already exists
		if (error?.message?.includes("profiles_username_key")) {
			return fail(409, {
				message: "An account with this username already exists",
				supabaseError: true,
				email
			});
		} else if (
			error?.message === "A user with this email address has already been registered"
		) {
			return fail(409, {
				message: "An account with this email already exists",
				supabaseError: true
			});
		} else if (error) {
			return fail(500, { message: "Internal Server Error", supabaseError: true });
		}

		throw redirect(303, "/");
	}
} satisfies Actions;
