<script context="module" lang="ts">
	import { AppBar, AppShell } from "@skeletonlabs/skeleton";
	import { currentDemonListTab } from "$lib/stores.js";
</script>

<script>
	import { goto } from "$app/navigation";
</script>

<AppShell>
	<svelte:fragment slot="pageHeader">
		<AppBar background="bg-surface-200-700-token" regionRowMain="place-self-center">
			<div class="buttons">
				<div class="header-button">
					<button
						on:click={() => {
							currentDemonListTab.set("main");
							goto("/list/demons");
						}}
						>Main List
					</button>
				</div>
				<div class="header-button">
					<button
						on:click={() => {
							currentDemonListTab.set("extended");
							goto("/list/demons");
						}}
						>Extended List
					</button>
				</div>
				<div class="header-button">
					<button
						on:click={() => {
							currentDemonListTab.set("legacy");
							goto("/list/demons");
						}}
						>Legacy List
					</button>
				</div>
				<div class="header-button">
					<a href="/list/demons/leaderboard">Leaderboard</a>
				</div>
				<div class="header-button">
					<a href="/list/submit">Submit</a>
				</div>
			</div>
		</AppBar>
	</svelte:fragment>
	<slot />
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
		border-bottom-color: rgba(var(--color-surface-100-900-token) / 1);
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
