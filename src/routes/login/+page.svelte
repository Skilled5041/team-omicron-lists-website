<script lang="ts">
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
		</label>
		<button class="btn variant-filled-primary">Login</button>
		{#if form?.error}
			<p class="error">{form?.message}</p>
		{/if}
	</form>
</div>

<style>
	button {
		margin-top: 1em;
		margin-bottom: 1em;
		width: 100%;
	}

	.form-container {
		margin: 4em 48em 8em 48em;
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
		border-color: rgba(var(--color-error-500) / 1);
	}

	.error {
		color: rgba(var(--color-error-500) / 1);
		font-size: 12px;
		line-height: 1.5;
	}
</style>
