import type { RequestHandler } from "@sveltejs/kit";
import { json } from "@sveltejs/kit";
import { supabase } from "$lib/supabase/supabase";

export const GET: RequestHandler = async () => {
	const options: ResponseInit = {
		status: 200,
		headers: {
			"content-type": "application/json"
		}
	};

	const { data, error } = await supabase.from("demons_list_info").select("*");

	if (error) {
		options.status = 500;
		return json(
			{
				status: 500,
				error: {
					message: "Unable to fetch data from database."
				}
			},
			options
		);
	}

	if (data.length === 0) {
		options.status = 404;
		return json(
			{
				status: 404,
				error: {
					message: "No list info available."
				}
			},
			options
		);
	}

	return json(
		{
			status: 200,
			data: {
				total_number_of_levels: data[0].total_count,
				main_list_level_count: data[0].mainlist_count,
				extended_list_level_count: data[0].extended_list_count,
				legacy_list_level_count: Math.max(
					data[0].total_count - data[0].mainlist_count - data[0].extended_list_count,
					0
				)
			}
		},
		options
	);
};
