<script lang="ts">
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
		<label class="label">
			<span>Password</span>
			<input
				class="input"
				name="password"
				placeholder="Password"
				required
				title="Password"
				type="password"
			/>
			{#if form?.passwordError}
				<p class="error">{form?.message}</p>
			{/if}
		</label>
		<label class="label">
			<span>Confirm Password</span>
			<input
				class="input"
				name="confirmPassword"
				placeholder="Confirm Password"
				required
				title="Confirm Password"
				type="password"
			/>
		</label>
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
		margin: 4rem 48rem 8rem 48rem;
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
</style>
