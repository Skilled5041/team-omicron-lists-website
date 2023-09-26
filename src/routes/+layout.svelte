<script>
	import "../app.postcss";
	import omicronLogo from "$lib/assets/team_omicron_logo.webp";
	import githubLogo from "$lib/assets/github_logo_light.svg";
	import discordLogo from "$lib/assets/discord_logo_light.svg";
	import { AppBar, AppShell } from "@skeletonlabs/skeleton";
	import { LightSwitch } from "@skeletonlabs/skeleton";

	export let data;
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
						<div class="omicron-logo">
							<img alt="Team Omicron Logo" class="logo" src={omicronLogo} />
							<!-- TODO: Get a font for the logo -->
							<h1>Team Omicron</h1>
						</div>
					</a>
				</div>
			</svelte:fragment>
			<div class="centre">
				<div class="link-container">
					<a href="/list/demons">Demons List</a>
				</div>
				<div class="link-container">
					<a href="/list/challenges">Challenge List</a>
				</div>
				<div class="link-container">
					<a href="/about">About</a>
				</div>
				{#if data?.session?.user}
					<div class="link-container">
						<a href="/account">Account</a>
					</div>
					<form action="/logout" method="POST">
						<button>Logout</button>
					</form>
				{:else}
					<div class="link-container">
						<a href="/login">Login</a>
					</div>
					<div class="link-container">
						<a href="/register">Register</a>
					</div>
				{/if}
			</div>
			<svelte:fragment slot="trail">
				<div class="right">
					<LightSwitch />
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
	<svelte:fragment slot="footer">
		<AppBar regionRowMain="place-self-center">
			<div class="footer">
				<h2 class="footer-text">Copyright © 2023 Team Omicron</h2>
				<a class="footer-link" href="/privacy">Privacy Policy</a>
				<a class="footer-link" href="/terms">Terms Of Service</a>
			</div>
		</AppBar>
	</svelte:fragment>
</AppShell>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=anonymous>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,200;9..40,300;9..40,400;9..40,600;9..40,900&display=swap" rel="stylesheet">

<style>

	* {
		font-family: "DM Sans", sans-serif;
		font-weight: 400;
		font-size: 18px;
	}

	a {
		font-size: 18px;
	}

	.link-container {
		border-bottom-width: 2px;
		border-bottom-color: transparent;
		transition: 200ms;
	}

	.link-container:hover {
		border-bottom-color: rgba(var(--color-surface-100) / 1);
		transition: 200ms;
	}

	.left {
		margin-left: 6rem;
	}

	.centre {
		display: flex;
		justify-content: center;
		gap: 3rem;
	}

	.right {
		display: flex;
		justify-content: center;
		gap: 1.5rem;
		margin-right: 6rem;
		align-items: center;
	}

	.logo {
		border-radius: 8px;
		height: 2rem;
		width: 2rem;
	}

	.omicron-logo {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	h1 {
		font-size: 1.5rem;
		font-weight: 600;
		margin: 0;
	}

	.footer {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	.footer-text {
		font-size: 1rem;
	}

	.footer-link {
		font-size: 1rem;
	}

	.footer-link:hover {
		text-decoration: underline;
	}

	button {
		border-bottom: 2px solid transparent;
		transition: 200ms;
		font-size: 18px;
	}

	button:hover {
		border-bottom: 2px solid white;
		transition: 200ms;
	}
</style>
