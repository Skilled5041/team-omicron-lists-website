import type { PageServerLoad } from "./$types";
import { supabase } from "$lib/supabase/supabase";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ params }) => {
	if (!params.rank) {
		throw error(404, {
			message: "Not found"
		});
	}

	if (isNaN(parseInt(params.rank))) {
		throw error(404, {
			message: "Not found"
		});
	}

	const response = await fetch(`/api/list/demons/level/${params.rank}`);
	const demonInfo = await response.json();

	return {
		status: 200,
		level: demons_list[0],
		isLastLevel: demons_list_info[0].total_count === parseInt(params.rank),
		numberRankedLevels:
			demons_list_info[0].mainlist_count + demons_list_info[0].extended_list_count
	};
};
