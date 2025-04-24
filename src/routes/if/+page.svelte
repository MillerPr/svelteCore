<script>
	let count = $state(0);

	function increment() {
		count += 1;
	}
</script>

<div class="container">
	<div class="pb-5 font-bold">#if</div>

	<button class="rounded bg-blue-500 px-4 py-2 text-white" onclick={increment}> Click </button>
	{#if count === 0}
		<p></p>
	{:else if count < 5}
		<p class="mt-4">
			Thank you for clicking {count}
			{count === 1 ? 'time' : 'times'}.
		</p>
	{:else}
		<p class="mt-4 text-red-500">Ok, you can stop clicking now.</p>
	{/if}
</div>
