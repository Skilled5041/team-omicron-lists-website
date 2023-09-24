import type { AuthSession } from "@supabase/supabase-js";

export const load = async ({
	locals: { getSession }
}: {
	locals: { getSession: () => Promise<AuthSession> };
}) => {
	return {
		session: await getSession()
	};
};
