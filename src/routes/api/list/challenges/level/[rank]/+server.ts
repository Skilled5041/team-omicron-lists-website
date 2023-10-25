import type { RequestHandler } from "@sveltejs/kit";
import { json } from "@sveltejs/kit";
import { supabase } from "$lib/supabase/supabase";

export const GET: RequestHandler = async (event) => {
	const options: ResponseInit = {
		status: 200,
		headers: {
			"content-type": "application/json"
		}
	};

	const rank = event.params.rank;
	if (!rank) {
		options.status = 400;
		return json(
			{
				status: 400,
				error: {
					message: "Please provide a rank."
				}
			},
			options
		);
	}

	const { data, error } = await supabase.from("challenge_list").select("*").eq("rank", rank);

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

	if (!data || data.length === 0) {
		options.status = 404;
		return json(
			{
				status: 404,
				error: {
					message: "Level not found."
				}
			},
			options
		);
	}

	return json(
		{
			status: 200,
			data: data[0]
		},
		options
	);
};
