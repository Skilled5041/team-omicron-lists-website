<script lang="ts">
	import type { PageServerData } from "./$types";
	import LevelInfo from "$lib/components/LevelInfo.svelte";

	export let data: PageServerData;
</script>

<LevelInfo {data} />
