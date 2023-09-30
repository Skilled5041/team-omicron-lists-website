<script lang="ts">
	import Icon from "@iconify/svelte";

</script>

<div class="email-confirm-container">
	<Icon icon="line-md:email" />
	<h1>Please confirm your email</h1>
	<p>An email has been sent to your inbox. Click the link in the email to finish your account registration. Check your
		spam folder if you don't see it.</p>
</div>

<style lang="postcss">
	div :global(svg) {
		font-size: 6rem;
	}

    .email-confirm-container {
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
        .email-confirm-container {
            margin: 10% 30% 0 30%;
            padding: 4% 8% 4% 8%;
        }
    }

    @media (max-width: 1400px) {
        .email-confirm-container {
            margin: 10% 20% 0 20%;
            padding: 4% 8% 4% 8%;
        }
    }

    @media (max-width: 1024px) {
        .email-confirm-container {
            margin: 10% 15% 0 15%;
            padding: 4% 8% 4% 8%;
        }
    }

    @media (max-width: 768px) {
        .email-confirm-container {
            margin: 10% 10% 0 10%;
            padding: 4% 8% 4% 8%;
        }
    }
</style>

