<script lang="ts">
	type NewsItem = {
		name: string;
		lede: string;
		articleText: string;
		imageUrl: string;
	};

	const newsItems: NewsItem[] = [
		{
			name: 'UChicago Researchers Make Exciting Discovery',
			lede: 'UChicago researchers make a breakthrough astronomy discovery',
			articleText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			imageUrl: 'https://placehold.co/400x300/EEE/31343C'
		},
		{
			name: 'UChicago Researchers Make Another Exciting Discovery',
			lede: 'UChicago researchers make a breakthrough astronomy discovery',
			articleText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			imageUrl: 'https://placehold.co/400x300/EEE/31343C'
		}
	];
</script>

{#snippet newsCard(newsItem: NewsItem)}
	<div class="rounded-lg bg-white p-4 shadow-md">
		<img src={newsItem.imageUrl} alt={newsItem.name} class="h-auto w-full rounded-t-lg" />
		<div class="mt-4">
			<h2 class="text-xl font-semibold text-red-800">{newsItem.name}</h2>
			<p class="text-gray-600">{newsItem.lede}</p>
			<p class="mt-2 text-lg">{newsItem.articleText}</p>
		</div>
	</div>
{/snippet}
<div class="container mx-auto p-4">
	<h1 class="mb-4 text-3xl font-bold">newsItem Details</h1>
	{#each newsItems as newsItem}
		{@render newsCard(newsItem)}
	{/each}
</div>
