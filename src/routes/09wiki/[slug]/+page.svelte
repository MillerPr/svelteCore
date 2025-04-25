<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	let results = data.results;
</script>

<div class="container flex flex-col items-center">
	<img
		src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/263px-Wikipedia-logo-v2.svg.png"
		alt="Wikipedia Logo"
		height="75"
		width="75"
	/>
	<h1>Wikipedia Results Page</h1>
	<ul>
		{#each results as result}
			<li>
				<a
					href="https://en.wikipedia.org/wiki/{result.title}"
					target="_blank"
					rel="noopener noreferrer"
				>
					{result.title}
				</a>
				<div>{@html result.snippet}</div>
			</li>
		{/each}
	</ul>
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

	ul {
		padding: 0;
		margin: 1rem 0 0 0;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	li {
		list-style: none;
		background-color: lightgrey;
		padding: 1rem;
		border-radius: 8px;
		width: 50vw;
	}

	li a {
		color: blue;
	}
</style>
