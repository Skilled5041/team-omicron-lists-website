import type { PageServerLoad } from "./$types";
import { supabase } from "$lib/supabase/supabase";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
	const { data: demons_list, error: error1 } = await supabase.from("demons_list").select("*");

	const { data: demons_list_info, error: error2 } = await supabase
		.from("demons_list_info")
		.select("mainlist_count,extended_list_count");

	if (error1) {
		throw error(500, {
			message: "Could not fetch list"
		});
	}

	if (error2) {
		throw error(500, {
			message: "Could not fetch list info"
		});
	}

	const mainlist_count = demons_list_info?.[0].mainlist_count;
	const extended_list_count = demons_list_info?.[0].extended_list_count;

	if (!mainlist_count || !extended_list_count) {
		throw error(500, {
			message: "Could not fetch list info"
		});
	}

	const filtered = demons_list?.filter((demon) => demon.rank !== null);
	filtered?.sort((a, b) => (a.rank as number) - (b.rank as number));

	const mainlist = filtered?.slice(0, mainlist_count);
	const extended_list = filtered?.slice(mainlist_count, mainlist_count + extended_list_count);
	const legacy_list = filtered?.slice(mainlist_count + extended_list_count);

	return {
		status: 200,
		mainlist,
		extended_list,
		legacy_list
	};
};
