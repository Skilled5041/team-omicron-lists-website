<script lang="ts">
	import { page } from "$app/stores";
	import Icon from "@iconify/svelte";

	const icons: Record<number, string> = {
		500: "carbon:data-error",
		404: "carbon:unknown"
	};

	const getIcon = (status: number) => {
		if (status in icons) {
			return icons[status];
		} else {
			return icons[500];
		}
	};
</script>

<div class="error-container">
	<Icon icon={getIcon($page.status)} />
	<h1>{$page.status}</h1>
	<p>{$page.error?.message}</p>
</div>

<style lang="postcss">
	div :global(svg) {
		font-size: 6rem;
	}

	.error-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		line-height: 1.5;
		gap: 1rem;
		border-radius: 12px;
		background-color: rgba(0, 0, 0, 0.3);
		margin: 6% 35% 0 35%;
		padding: 2% 5% 2% 5%;
	}

	h1 {
		font-size: 1.5rem;
		font-weight: 700;
	}

	@media (max-width: 1650px) {
		.error-container {
			margin: 10% 30% 0 30%;
			padding: 4% 8% 4% 8%;
		}
	}

	@media (max-width: 1400px) {
		.error-container {
			margin: 10% 20% 0 20%;
			padding: 4% 8% 4% 8%;
		}
	}

	@media (max-width: 1024px) {
		.error-container {
			margin: 10% 15% 0 15%;
			padding: 4% 8% 4% 8%;
		}
	}

	@media (max-width: 768px) {
		.error-container {
			margin: 10% 10% 0 10%;
			padding: 4% 8% 4% 8%;
		}
	}
</style>
