<script lang="ts">
	import PasswordInput from "$lib/components/PasswordInput.svelte";

	export let form;
</script>

<div class="form-container">
	<h1 class="title">Register</h1>
	<form action="?/register" method="POST">
		<label class="label">
			<span>Username</span>
			<input
				class="input"
				name="username"
				placeholder="Username"
				required
				title="Username"
				type="text"
			/>
			{#if form?.usernameError}
				<p class="error">{form?.message}</p>
			{/if}
		</label>
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
				<p class="error">{form?.message}</p>
			{/if}
		</label>
		<PasswordInput errorMessage={form?.passwordError ? form?.message : null} />
		<PasswordInput name="confirmPassword" label="Confirm Password" />
		<button class="btn variant-filled-primary">Register</button>
		{#if form?.supabaseError}
			<p class="error">{form?.message}</p>
		{/if}
	</form>
</div>

<style>
	button {
		margin-top: 1rem;
		margin-bottom: 1rem;
		width: 100%;
	}

	.form-container {
		border-radius: 12px;
		margin: 6% 35% 0 35%;
		padding: 2% 5% 2% 5%;
		background-color: rgba(0, 0, 0, 0.3);
	}

	.label {
		padding-bottom: 1rem;
	}

	.title {
		text-align: center;
		font-size: 32px;
		padding: 1rem;
	}

	.input:user-invalid {
		border-color: rgba(var(--color-error-500) / 1);
	}

	.error {
		color: rgba(var(--color-error-500) / 1);
		font-size: 0.75rem;
		line-height: 1.5;
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
