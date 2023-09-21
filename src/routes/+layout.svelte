<script>
	import "../app.postcss";
	import omicronLogo from "$lib/assets/team_omicron_logo.webp";
	import githubLogo from "$lib/assets/github_logo_light.svg";
	import discordLogo from "$lib/assets/discord_logo_light.svg";
	import { AppBar, AppShell } from "@skeletonlabs/skeleton";
</script>

<AppShell>
	<svelte:fragment slot="pageHeader">
		<AppBar
			gridColumns="grid-cols-3"
			slotDefault="place-self-center"
			slotTrail="place-content-end"
		>
			<svelte:fragment slot="lead">
				<div class="left">
					<a class="logo" href="/">
						<img alt="Team Omicron Logo" class="logo" src={omicronLogo} />
					</a>
				</div>
			</svelte:fragment>
			<div class="centre">
				<a href="/list/demons">Demons List</a>
				<a href="/list/challenges">Challenge List</a>
				<a href="/about">About</a>
				<a href="/contact">Contact</a>
			</div>
			<svelte:fragment slot="trail">
				<div class="right">
					<a class="logo" href="https://github.com/Skilled5041/team-omicron-website">
						<img alt="GitHub Logo" class="logo" src={githubLogo} />
					</a>
					<a class="logo" href="https://discord.gg/39rewbHnuf">
						<img alt="Discord Logo" class="logo" src={discordLogo} />
					</a>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>

<style>
	.left {
		margin-left: 6rem;
	}

	.right {
		display: flex;
		justify-content: center;
		gap: 1.5rem;
		margin-right: 6rem;
	}

	.logo {
		height: 2rem;
		width: 2rem;
	}
</style>
