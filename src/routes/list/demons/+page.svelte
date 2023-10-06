<script lang="ts">
	import type { PageServerData } from "./$types";
	import LevelList from "$lib/components/LevelList.svelte";
	import { currentDemonListTab } from "$lib/stores";

	export let data: PageServerData;
</script>

{#if $currentDemonListTab === "main"}
	<LevelList levels={data.mainlist} />
{:else if $currentDemonListTab === "extended"}
	<LevelList levels={data.extended_list} />
{:else if $currentDemonListTab === "legacy"}
	<LevelList levels={data.legacy_list} />
{/if}

<!--<style>-->
<!--</style>-->
