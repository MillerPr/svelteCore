<script lang="ts">
	import Navbar from '$lib/components/my-navbar.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="container mx-auto mt-6">
	<Navbar />
	{@render children()}
</div>
