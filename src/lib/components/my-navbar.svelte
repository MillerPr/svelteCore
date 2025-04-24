<script lang="ts">
	let routeArray = [
		{ route: '', routeName: 'HOME' },
		{ route: 'state', routeName: '$state' },
		{ route: 'state/deepstate', routeName: 'deep state' },
		{ route: 'state/derived', routeName: 'derived state' },
		{ route: 'props', routeName: '$props' },
		{ route: 'bindable', routeName: '$bindable' },
		{ route: 'if', routeName: '#if' },
		{ route: 'each', routeName: '#each' },
		{ route: 'snippet', routeName: '#snippet' },
		{ route: 'render', routeName: '@render' },
		{ route: 'debug', routeName: '@debug' },
		{ route: 'style', routeName: 'style:' }
	];
</script>

<div class="container pb-5">
	<span>Menu: </span>
	{#each routeArray as { route, routeName }}
		<span class="px-3">
			<a href={`/${route}`} class="text-blue-500 hover:underline">
				{routeName}
			</a>
		</span>
	{/each}
</div>
