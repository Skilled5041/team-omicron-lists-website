<script lang="ts">
	import PasswordInput from "$lib/components/PasswordInput.svelte";

	export let form;
</script>

<div class="form-container">
	<h1 class="title">Login</h1>
	<form action="?/login" method="POST">
		<label class="label">
			<span>Email</span>
			<input
				class="input"
				name="email"
				placeholder="Email"
				required
				title="Email"
				type="email"
			/>
			{#if form?.emailError}
				<p class="text-error-500 text-xs">{form?.message}</p>
			{/if}
		</label>
		<PasswordInput />
		<button class="btn variant-filled-primary w-full mt-4 mb-4">Login</button>
		{#if form?.error}
			<p class="text-error-500 text-xs">{form?.message}</p>
		{/if}
	</form>
</div>

<style lang="postcss">
	.form-container {
		border-radius: 12px;
		margin: 6% 35% 0 35%;
		padding: 2% 5% 2% 5%;
		background-color: rgba(0, 0, 0, 0.3);
	}

	.label {
		padding-bottom: 1em;
	}

	.title {
		text-align: center;
		font-size: 32px;
		padding: 1em;
	}

	.input:user-invalid {
		border-color: rgba(var(--text-error-400-500-token) / 1);
	}

	@media (max-width: 1650px) {
		.form-container {
			margin: 10% 30% 0 30%;
			padding: 2% 8% 2% 8%;
		}
	}

	@media (max-width: 1400px) {
		.form-container {
			margin: 10% 20% 0 20%;
			padding: 2% 8% 2% 8%;
		}
	}

	@media (max-width: 1024px) {
		.form-container {
			margin: 10% 15% 0 15%;
			padding: 2% 8% 2% 8%;
		}
	}

	@media (max-width: 768px) {
		.form-container {
			margin: 10% 10% 0 10%;
			padding: 2% 8% 2% 8%;
		}
	}
</style>
