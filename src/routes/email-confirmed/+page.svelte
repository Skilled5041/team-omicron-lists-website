<script>
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";

	if (browser) {
		// Redirect if they try to access this page directly and not through the email link
		if (!window.location.hash.startsWith("#access_token=")) {
			goto("/");
		}
	}
</script>

<h1>Email confirmed</h1>
