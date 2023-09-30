<script lang="ts">
	import { AppBar, AppShell } from "@skeletonlabs/skeleton";
	import type { PageServerData } from "./$types";
	import LevelList from "$lib/components/LevelList.svelte";

	let currentList: "main" | "extended" | "legacy" = "main";
	export let data: PageServerData;
</script>

<AppShell>
	<svelte:fragment slot="pageHeader">
		<AppBar background="bg-surface-200-700-token" regionRowMain="place-self-center">
			<div class="buttons">
				<div class="header-button">
					<button on:click={() => (currentList = "main")}>Main List</button>
				</div>
				<div class="header-button">
					<button on:click={() => (currentList = "extended")}>Extended List</button>
				</div>
				<div class="header-button">
					<button on:click={() => (currentList = "legacy")}>Legacy List</button>
				</div>
				<div class="header-button">
					<a href="/list/demons/leaderboard">Leaderboard</a>
				</div>
			</div>
		</AppBar>
	</svelte:fragment>
	{#if currentList === "main"}
		<LevelList levels={data.mainlist} />
	{:else if currentList === "extended"}
		<LevelList levels={data.extended_list} />
	{:else if currentList === "legacy"}
		<LevelList levels={data.legacy_list} />
	{/if}
</AppShell>

<style>
	.buttons {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}

	.header-button {
		border-bottom-width: 2px;
		border-bottom-color: transparent;
		transition: 200ms;
	}

	.header-button:hover {
		border-bottom-color: rgba(var(--color-surface-100) / 1);
		transition: 200ms;
	}

	@media (max-width: 1920px) {
		.buttons {
			font-size: 1rem;
		}
	}

	/*@media (max-width: 1650px) {*/
	/*    .buttons {*/
	/*    }*/
	/*}*/

	/*@media (max-width: 1400px) {*/
	/*    .buttons {*/
	/*    }*/
	/*}*/

	@media (max-width: 1024px) {
		.buttons {
			font-size: 0.85rem;
		}
	}

	@media (max-width: 768px) {
		.buttons {
			font-size: 0.75rem;
		}
	}
</style>
