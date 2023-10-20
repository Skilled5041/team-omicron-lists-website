import type { Actions } from "./$types";
import { supabase } from "$lib/supabase/supabase";

export const actions = {
	submit: async ({ request }) => {
		const formData = await request.formData();

		const operation = formData.get("operation");

		if (operation === "insert") {
			const list = (formData.get("list") as string).toLowerCase();
			const levelName = formData.get("levelName");

			const mainServerId = formData.get("mainId") as string;
			if (!mainServerId.match(/^\d+$/)) {
				return {
					mainIdError: true,
					message: "Invalid ID"
				};
			}

			const gdpsId = formData.get("gddpId") as string;
			if (gdpsId && !gdpsId.match(/^\d+$/)) {
				return {
					gdpsIdError: true,
					message: "Invalid ID"
				};
			}

			const verificationUrl = formData.get("verificationUrl") as string;
			if (!verificationUrl.match(/^(?!https:\/\/).+/)) {
				return {
					verificationUrlError: true,
					message: "Invalid URL"
				};
			}

			const verifier = formData.get("verifier") as string;
			const { data: profiles, error } = await supabase
				.from("profiles")
				.select("*")
				.ilike("username", verifier);

			if (error) {
				console.log(error);
				return {
					databaseError: true,
					message: error.message
				};
			}

			if (profiles.length === 0) {
				return {
					verifierError: true,
					message: "Invalid verifier"
				};
			}

			const publisher = formData.get("publisher") as string;
			const { data: publisherProfiles, error: publisherError } = await supabase
				.from("profiles")
				.select("*")
				.ilike("username", publisher);

			if (publisherError) {
				console.log(publisherError);
				return {
					databaseError: true,
					message: publisherError.message
				};
			}

			if (publisherProfiles.length === 0) {
				return {
					publisherError: true,
					message: "Invalid publisher"
				};
			}

			const creatorsString = formData.get("creators") as string;
			const creators = creatorsString.split(",");
			const rank: number = parseInt(formData.get("rank") as string);

			const { data: listInfo, error: rankInfoError } = await supabase
				.from(`${list}_list_info`)
				.select("*");

			if (rankInfoError) {
				console.log(rankInfoError);
				return {
					databaseError: true,
					message: rankInfoError.message
				};
			}

			if (rank > listInfo[0].mainlist_count + listInfo[0].extended_list_count) {
				return {
					rankError: true,
					message: "Invalid rank"
				};
			}

			const minimumPercentage = parseInt(formData.get("minimumPercentage") as string);

			const fpsString = formData.get("fps");
			const nongUrl = formData.get("nongUrl");

			let parsedFps = null;
			if (fpsString) {
				parsedFps = (fpsString as string).split(",").map((fps) => parseInt(fps));
			}

			const { data: ListLevels, error: listLevelsError } = await supabase
				.from(`${list}_list`)
				.select("*")
				.gte("rank", rank);

			if (listLevelsError) {
				console.log(listLevelsError);
				return {
					databaseError: true,
					message: listLevelsError.message
				};
			}

			for (const level of ListLevels) {
				const { error: updateError } = await supabase
					.from(`${list}_list`)
					.update({
						rank: level.rank + 1
					})
					.eq("id", level.id);

				if (updateError) {
					console.log(updateError);
					return {
						databaseError: true,
						message: updateError.message
					};
				}
			}

			const { error: listInsertError, data: levelData } = await supabase
				.from(`${list}_list`)
				.insert([
					{
						rank: rank,
						name: levelName as string,
						publisher: publisherProfiles[0].username,
						fps: parsedFps,
						verifier: profiles[0].username,
						nong_download_link: nongUrl as string | null,
						gdps_id: gdpsId,
						verification_url: verificationUrl,
						minimum_progress: minimumPercentage,
						main_id: mainServerId,
						creators: creators
					}
				])
				.select();

			if (listInsertError) {
				console.log(listInsertError);
				return {
					databaseError: true,
					message: listInsertError.message
				};
			}

			const { error: incrementError } = await supabase
				.from(`${list}_list_info`)
				.update({
					total_count: listInfo[0].total_count + 1
				})
				.eq("id", 1);

			if (incrementError) {
				console.log(incrementError);
				return {
					databaseError: true,
					message: incrementError.message
				};
			}

			const { error: historyError } = await supabase.from(`${list}_list_history`).insert(
				{
					level: levelData[0].id,
					operation: "insert",
					change: rank
				}
			);

			if (historyError) {
				console.log(historyError);
				return {
					databaseError: true,
					message: historyError.message
				};
			}

			const { error: recordError } = await supabase
				.from(`${list}_list_records`)
				.insert({
					username: profiles[0].username,
					progress: 100,
					video_proof: verificationUrl,
					level_id: levelData[0].id
				});

			if (recordError) {
				console.log(recordError);
				return {
					databaseError: true,
					message: recordError.message
				};
			}

			return {
				success: true
			};
		}
	}
} satisfies Actions;
