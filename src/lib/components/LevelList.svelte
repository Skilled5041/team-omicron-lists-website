<script lang="ts">
	import Icon from "@iconify/svelte";
	import type { Database } from "$lib/supabase/database.types";
	import { getYoutubeVideoId } from "$lib/youtube";
	import { inview } from "svelte-inview";
	import type { Options } from "svelte-inview";

	export let levels: Database["public"]["Tables"]["demons_list"]["Row"][] | undefined;

	const options: Options = {
		rootMargin: "100px"
	};

	let isInView = new Map<string, boolean>();
	levels?.forEach((level) => isInView.set(level.id.toString(), false));

	const handleChange = ({ detail }: CustomEvent) => {
		isInView.set(detail.node.id, detail.inView);
		isInView = isInView;
	};
</script>

{#if levels?.length === 0 || levels === undefined}
	<div class="error-container">
		<Icon icon="lucide:list-x" />
		<h1>There are no levels in this list</h1>
	</div>
{:else}
	<div class="levels-list">
		{#each levels as level}
			<div
				class="level-container"
				use:inview={options}
				on:inview_change={handleChange}
				class:animate={isInView.get(level.id.toString())}
				id={level.id.toString()}
			>
				<a href={level.verification_url} class="thumbnail">
					<img
						src={`https://img.youtube.com/vi/${getYoutubeVideoId(
							level.verification_url
						)}/hqdefault.jpg`}
						alt="Youtube Thumbnail"
					/>
				</a>
				<div class="level-info">
					<a href="/list/demons/{level.rank}">
						<h1>#{level.rank} - {level.name}</h1>
					</a>
					<a href="/users/{level.publisher}">
						<h1 class="publisher">{level.publisher}</h1>
					</a>
				</div>
			</div>
		{/each}
	</div>
{/if}

<style>
	div :global(svg) {
		font-size: 6rem;
	}

	img {
		width: 10rem;
		object-fit: cover;
		aspect-ratio: 16 / 9;
	}

	.levels-list {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin-top: 2rem;
	}

	.error-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		line-height: 1.5;
		gap: 1rem;
		border-radius: 12px;
		background-color: rgba(0, 0, 0, 0.3);
		margin: 6% 35% 0 35%;
		padding: 2% 5% 2% 5%;
	}

	.level-container {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		line-height: 1.5;
		gap: 2rem;
		border-radius: 12px;
		background-color: rgba(0, 0, 0, 0.3);
		margin: 0 30% 0 30%;
		padding: 1.5% 5% 1.5% 1.5%;
		opacity: 0;
		filter: blur(12px);
		transform: translateX(-400px);
	}

	.animate {
		opacity: 100%;
		transition: opacity 700ms 100ms, transform 400ms, filter 400ms;
		transform: rotateX(0deg) scale(1) translateX(0);
		filter: blur(0);
	}

	.level-container:hover {
		transition: 200ms 0ms;
		transform: scale(1.05);
	}

	.level-info {
		display: flex;
		flex-direction: column;
	}

	.thumbnail {
		display: block;
		margin-right: 0;
	}

	.publisher {
		opacity: 0.6;
		font-size: 1.2rem;
	}

	h1 {
		font-size: 1.4rem;
		font-weight: 700;
	}

	@media (max-width: 1650px) {
		.error-container {
			margin: 10% 30% 0 30%;
			padding: 4% 8% 4% 8%;
		}

		.level-container {
			margin: 0 20% 0 20%;
			padding: 1.5% 5% 1.5% 1.5%;
		}

		img {
			width: 8.5rem;
		}
	}

	@media (max-width: 1400px) {
		.error-container {
			margin: 10% 15% 0 15%;
			padding: 4% 8% 4% 8%;
		}

		.level-container {
			margin: 0 20% 0 20%;
			padding: 1.5% 5% 1.5% 1.5%;
			transform: translateX(-200px);
		}

		img {
			width: 7rem;
		}

		h1 {
			font-size: 1.4rem;
		}
	}

	@media (max-width: 1024px) {
		.error-container {
			margin: 10% 15% 0 15%;
			padding: 4% 8% 4% 8%;
		}

		.level-container {
			margin: 0 10% 0 10%;
			padding: 1.5% 5% 1.5% 1.5%;
			transform: translateX(-200px);
		}

		img {
			width: 6rem;
		}

		h1 {
			font-size: 1.2rem;
		}

		.publisher {
			font-size: 1rem;
		}
	}

	@media (max-width: 768px) {
		.error-container {
			margin: 10% 10% 0 10%;
			padding: 4% 8% 4% 8%;
		}

		.level-container {
			margin: 0 5% 0 5%;
			padding: 2% 5% 2% 2%;
			transform: translateX(-100px);
		}

		img {
			width: 6rem;
		}

		h1 {
			font-size: 1rem;
		}

		.publisher {
			font-size: 0.9rem;
		}
	}
</style>
