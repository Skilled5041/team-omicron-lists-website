<script>
	import { AppRail, AppRailAnchor, AppShell } from "@skeletonlabs/skeleton";
	import { page } from "$app/stores";
</script>

<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<AppRail width="w-26">
			<AppRailAnchor
				href="/admin"
				selected={$page.url.pathname === "/admin"}
				regionLabel="m-2"
			>
				Dashboard
			</AppRailAnchor>
			<AppRailAnchor
				href="/admin/levels"
				selected={$page.url.pathname.startsWith("/admin/levels")}
				regionLabel="m-2"
			>
				Levels
			</AppRailAnchor>
			<AppRailAnchor
				href="/admin/users"
				selected={$page.url.pathname.startsWith("/admin/users")}
				regionLabel="m-2"
			>
				Users
			</AppRailAnchor>
			<AppRailAnchor
				href="/admin/submissions"
				selected={$page.url.pathname.startsWith("/admin/submissions")}
				regionLabel="m-2"
			>
				Submissions
			</AppRailAnchor>
			<AppRailAnchor
				href="/admin/records"
				selected={$page.url.pathname.startsWith("/admin/records")}
				regionLabel="m-2"
			>
				Records
			</AppRailAnchor>
		</AppRail>
	</svelte:fragment>
	<slot />
</AppShell>

<style>
</style>
