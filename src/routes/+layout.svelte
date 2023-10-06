<script lang="ts">
	import "../app.postcss";
	import omicronLogo from "$lib/assets/team_omicron_logo.webp";
	import githubLogo from "$lib/assets/github_logo_light.svg";
	import discordLogo from "$lib/assets/discord_logo_light.svg";
	import { AppBar, AppRailTile, AppShell } from "@skeletonlabs/skeleton";
	import { LightSwitch } from "@skeletonlabs/skeleton";
	import Icon from "@iconify/svelte";
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from "@floating-ui/dom";
	import { storePopup } from "@skeletonlabs/skeleton";

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	let sidebarOpen = false;
	let currentSideBarTile = 0;

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
					<div class="light-switch">
						<LightSwitch />
					</div>
					<a class="logo" href="https://github.com/Skilled5041/team-omicron-website">
						<img alt="GitHub Logo" class="logo" src={githubLogo} />
					</a>
					<a class="logo" href="https://discord.gg/39rewbHnuf">
						<img alt="Discord Logo" class="logo" src={discordLogo} />
					</a>
					<button
						class="hamburger-menu"
						on:click={() => {
							sidebarOpen = !sidebarOpen;
						}}
					>
						<Icon icon="quill:hamburger" />
					</button>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<div class="sidebar" class:sidebarOpen>
			<AppRailTile bind:group={currentSideBarTile} name="Home" value={0}>
				<div class="sidebar-tile">
					<a href="/">Home</a>
				</div>
			</AppRailTile>
			<AppRailTile bind:group={currentSideBarTile} name="Demons" value={1}>
				<div class="sidebar-tile">
					<a href="/list/demons">Demons List</a>
				</div>
			</AppRailTile>
			<AppRailTile bind:group={currentSideBarTile} name="Challenges" value={2}>
				<div class="sidebar-tile">
					<a href="/list/challenges">Challenge List</a>
				</div>
			</AppRailTile>
			<AppRailTile bind:group={currentSideBarTile} name="About" value={3}>
				<div class="sidebar-tile">
					<a href="/about">About</a>
				</div>
			</AppRailTile>
			{#if data?.session?.user}
				<AppRailTile bind:group={currentSideBarTile} name="Account" value={4}>
					<div class="sidebar-tile">
						<a href="/account">Account</a>
					</div>
				</AppRailTile>
				<form action="/logout" method="POST">
					<button class="sidebar-tile">Logout</button>
				</form>
			{:else}
				<AppRailTile bind:group={currentSideBarTile} name="Login" value={4}>
					<div class="sidebar-tile">
						<a href="/login">Login</a>
					</div>
				</AppRailTile>
				<AppRailTile bind:group={currentSideBarTile} name="Register" value={5}>
					<div class="sidebar-tile">
						<a href="/register">Register</a>
					</div>
				</AppRailTile>
			{/if}
			<div class="flex flex-auto justify-center mt-4">
				<LightSwitch />
			</div>
		</div>
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

<style>
	:global(*) {
		font-family: "DM Sans", sans-serif;
		font-weight: 400;
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
		border-bottom-color: rgba(var(--color-surface-100-900-token) / 1);
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
		border-bottom-width: 2px;
		border-bottom-color: transparent;
		transition: 200ms;
		font-size: 18px;
	}

	button:hover {
		border-bottom: 2px solid rgba(var(--color-surface-100-900-token) / 1);
		transition: 200ms;
	}

	.hamburger-menu {
		display: none;
	}

	.sidebar {
		display: none;
	}

	@media (max-width: 1800px) {
		.left {
			margin-left: 1rem;
		}

		.right {
			margin-right: 1rem;
		}

		.logo {
			height: 1.75rem;
			width: 1.75rem;
		}

		a {
			font-size: 16px;
		}

		h1 {
			font-size: 1.25rem;
		}
	}

	@media (max-width: 1024px) {
		.sidebar {
			left: -100%;
			--tw-text-opacity: 1;
			--tw-bg-opacity: 1;
			color: rgb(var(--color-primary-100) / var(--tw-text-opacity));
			background-color: rgb(var(--color-surface-900) / var(--tw-bg-opacity));
			height: 100%;
			position: absolute;
			display: block;
			transition: left 0.4s cubic-bezier(0.7, 0, 0.3, 1);
			z-index: 10;
		}

		.sidebarOpen {
			left: 0;
			transition: left 0.4s cubic-bezier(0.7, 0, 0.3, 1);
		}

		a {
			font-size: 16px;
		}

		h1 {
			font-size: 1rem;
		}

		.left {
			margin-left: 0.5rem;
		}

		.logo {
			height: 1.5rem;
			width: 1.5rem;
		}

		.right {
			margin-right: 0.5rem;
		}

		.centre {
			display: none;
		}

		.sidebar-tile {
			margin: 1rem;
			overflow-wrap: break-word;
			width: 5rem;
		}

		.light-switch {
			display: none;
		}

		.hamburger-menu {
			display: block;
			border: none;
		}

		.hamburger-menu:hover {
			border: none;
		}

		div :global(svg) {
			font-size: 2rem;
		}
	}
</style>
