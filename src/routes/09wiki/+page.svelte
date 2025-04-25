<script lang="ts">
	import type { PageProps } from './$types';
	let { query } = $props();
	import { page } from '$app/state';
</script>

<div class="container flex flex-col items-center">
	<img
		src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/263px-Wikipedia-logo-v2.svg.png"
		alt="Wikipedia Logo"
		height="75"
		width="75"
	/>
	<h1>Wikipedia Search Page</h1>

	<div class="mt-8">
		<form action="{page.url.pathname}/{query}" method="GET">
			<input bind:value={query} placeholder="Search Wikipedia" />
			<button type="submit">Search</button>
		</form>
	</div>
</div>

<style>
	:global(body) {
		font-family: Arial, sans-serif;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin-top: 1rem;
	}

	img {
		margin-top: 1rem;
	}

	h1 {
		font-size: 2rem;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}
</style>
