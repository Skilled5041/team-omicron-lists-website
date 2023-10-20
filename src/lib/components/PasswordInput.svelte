<script lang="ts">
	import Icon from "@iconify/svelte";

	export let label = "Password";
	export let name = "password";
	export let errorMessage: string | null = null;
	let showPassword = false;
</script>

<label class="label">
	<span>{label} <span class="text-error-400-500-token">*</span></span>
	<div class="password-input-container">
		<input
			class="input"
			{name}
			placeholder={label}
			required
			title={label}
			type={showPassword ? "text" : "password"}
		/>
		<button
			class="hide-password-button"
			on:click={() => {
				showPassword = !showPassword;
			}}
			type="button"
		>
			{#if showPassword}
				<Icon icon="bxs:hide" />
			{:else}
				<Icon icon="bxs:show" />
			{/if}
		</button>
	</div>
	{#if errorMessage}
		<p class="text-error-500 text-xs">{errorMessage}</p>
	{/if}
</label>

<style lang="postcss">
	div :global(svg) {
		font-size: 1.5rem;
	}

	.label {
		padding-bottom: 1em;
	}

	.password-input-container {
		display: flex;
		align-items: center;
		position: relative;
	}

	.hide-password-button {
		@apply bg-surface-200 dark:bg-surface-700;
		transition-property: color, background-color, border-color, text-decoration-color, fill,
			stroke, opacity, box-shadow, transform, filter, backdrop-filter;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 200ms;
		border: none;
		cursor: pointer;
		outline: none;
		position: absolute;
		right: 0.8em;
	}
</style>
