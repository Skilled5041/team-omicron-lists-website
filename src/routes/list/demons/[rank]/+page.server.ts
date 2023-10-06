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

	const { data: demons_list, error: error1 } = await supabase
		.from("demons_list")
		.select("*")
		.eq("rank", params.rank);

	const { data: demons_list_info, error: error2 } = await supabase
		.from("demons_list_info")
		.select("total_count,mainlist_count,extended_list_count");

	if (error1 || error2 || !demons_list) {
		throw error(500, {
			message: "Could not fetch level info"
		});
	}

	if (demons_list.length === 0) {
		throw error(404, {
			message: "Not found"
		});
	}

	return {
		status: 200,
		level: demons_list[0],
		isLastLevel: demons_list_info[0].total_count === parseInt(params.rank),
		numberRankedLevels:
			demons_list_info[0].mainlist_count + demons_list_info[0].extended_list_count
	};
};
