<script lang="ts">
	import Icon from "@iconify/svelte";
	import type { Database } from "$lib/supabase/database.types";

	export let levels: Database["public"]["Tables"]["demons_list"]["Row"][] | undefined;
</script>

{#if levels?.length === 0}
	<div>
		<Icon icon="lucide:list-x" />
		<h1>There are no levels in this list</h1>
	</div>
{:else}
	<h1>todo</h1>
{/if}
