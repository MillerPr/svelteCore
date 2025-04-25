<script lang="ts">
	// A route will not show up in the menu until a +page is there. Hah!
	//remove duplicates from routeArray

	let routeArray = Object.keys(import.meta.glob('/src/routes/**/+page.svelte'))
		.map((path) => {
			const route = path
				.replace(/\/\[slug\]\/[^/]*/, '')
				.replace('/src/routes/', '')
				.replace('/+page.svelte', '')
				.replace(/\/$/, '');
			return {
				route: route,
				routeName: route.replace(/\d+/, '')
			};
		})
		.filter((route, index, self) => index === self.findIndex((t) => t.route === route.route));

	routeArray[0].route = '';
	routeArray[0].routeName = 'HOME';
</script>

<div class="flex h-24 items-center justify-center font-bold">
	{#each routeArray as { route, routeName }}
		<span class="px-3">
			<a href={`/${route}`} class="text-red-800 hover:text-red-400">
				{routeName}
			</a>
		</span>
	{/each}
</div>
