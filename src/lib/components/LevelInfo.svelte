<script lang="ts">
	import Icon from "@iconify/svelte";
	import type { PopupSettings } from "@skeletonlabs/skeleton";
	import { popup } from "@skeletonlabs/skeleton";
	import type { Database } from "$lib/supabase/database.types";
	import { getYoutubeVideoId } from "$lib/youtube";
	import { calculatePoints } from "$lib/points";

	interface LevelData {
		level:
			| Database["public"]["Tables"]["demons_list"]["Row"]
			| Database["public"]["Tables"]["challenge_list"]["Row"];
		isLastLevel: boolean;
		numberRankedLevels: number;
	}

	export let data: LevelData;

	let creators = "<UNKNOWN>";
	if (data.level.creators) {
		creators = "";
		for (let i = 0; i < data.level.creators.length; i++) {
			creators += data.level.creators[i];
			if (i < data.level.creators.length - 1) {
				creators += ", ";
				if (i === data.level.creators.length - 2) {
					creators += "and ";
				}
			}
		}
	}

	const creatorsArr: string[] = data.level.creators ?? [];

	const popupHover: PopupSettings = {
		event: "hover",
		target: "popupHover",
		placement: "bottom"
	};

	const fpsString = data.level.fps ? `${data.level.fps.join(", ").trim()}` : "any";
</script>

<div class="level-container">
	<div class="top-part">
		<div class="top-left">
			{#if data.level.rank > 1}
				<a href="/list/demons/{data.level.rank - 1}" data-sveltekit-reload>
					<Icon icon="fa6-solid:less-than" />
				</a>
			{/if}
		</div>
		<h1 class="level-name">{data.level.name}</h1>
		<div class="top-right">
			{#if !data.isLastLevel}
				<a href="/list/demons/{data.level.rank + 1}" data-sveltekit-reload>
					<Icon icon="fa6-solid:greater-than" />
				</a>
			{/if}
		</div>
	</div>
	<div class="info">
		{#if creators.length > 12}
			<p class="underline [&>*]:pointer-events-none" use:popup={popupHover}>
				By {data.level.creators?.[0]} and more
			</p>
			<div class="bg-secondary-50-900-token rounded-md p-2" data-popup="popupHover">
				{#each creatorsArr as creator}
					<p>{creator}</p>
				{/each}
			</div>
		{:else}
			<p>By {creators}</p>
		{/if}
		<p>Verified by {data.level.verifier}, and published by {data.level.publisher}</p>
		<hr class="m-4" />
	</div>
	<iframe
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowfullscreen
		src="https://www.youtube-nocookie.com/embed/{getYoutubeVideoId(
			data.level.verification_url
		)}"
		title="YouTube video player"
	/>
	<div class="info-bottom">
		<div class="row-start-2">
			<p>Points (100%)</p>
			<p>{calculatePoints(data.level.rank, data.numberRankedLevels).toFixed(2)}</p>
		</div>
		<div class="row-start-2">
			<p>Points ({data.level.minimum_progress}%)</p>
			<p>{(calculatePoints(data.level.rank, data.numberRankedLevels) * 0.1).toFixed(2)}</p>
		</div>
		<div class="row-start-2">
			<p>FPS</p>
			<p>{fpsString}</p>
		</div>
	</div>
</div>

<style lang="postcss">
	div :global(svg) {
		font-size: 2rem;
	}

	hr {
		width: 32rem;
	}

	iframe {
		aspect-ratio: 16 / 9;
		width: 30rem;
	}

	.level-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		line-height: 1.5;
		gap: 1rem;
		border-radius: 12px;
		background-color: rgba(0, 0, 0, 0.3);
		margin: 6% 35% 0 35%;
		padding: 2% 2% 2% 2%;
	}

	.top-part {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;
	}

	.level-name {
		font-size: 2rem;
		font-weight: 700;
	}

	.info-bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;
	}

	h1 {
		font-size: 1.5rem;
		font-weight: 700;
	}

	@media (max-width: 1650px) {
		.level-container {
			margin: 10% 30% 0 30%;
			padding: 4% 8% 4% 8%;
		}
	}

	@media (max-width: 1400px) {
		.level-container {
			margin: 10% 20% 0 20%;
			padding: 4% 8% 4% 8%;
		}
	}

	@media (max-width: 1024px) {
		.level-container {
			margin: 10% 15% 0 15%;
			padding: 4% 8% 4% 8%;
		}
	}

	@media (max-width: 768px) {
		.level-container {
			margin: 10% 10% 0 10%;
			padding: 4% 8% 4% 8%;
		}
	}
</style>
