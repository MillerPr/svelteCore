<script>
	/** @type {import('./$types').PageProps} */
	let { data } = $props();
</script>

{#if data?.length > 0}
	<h1>Search data for "{slug}"</h1>
	<ul>
		{#each data as result}
			<li>
				<a
					href="https://en.wikipedia.org/wiki/{encodeURIComponent(result.title)}"
					target="_blank"
					rel="noopener noreferrer">{result.title}</a
				>
				<p>{result.snippet}</p>
			</li>
		{/each}
	</ul>
{:else}
	<p>No data found.</p>
{/if}

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

	h1 {
		font-size: 2rem;

		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}

	input[type='text'] {
		width: 300px;
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	button {
		padding: 0.6rem 1rem;
		background-color: #973a94;
	}
</style>
