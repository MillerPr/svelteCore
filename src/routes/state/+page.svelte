<script>
	let count = $state(0);
	function increment() {
		count += 1;
	}
	let agreed = $state(false);
</script>

<div class="container">
	<div class="pb-5 font-bold">$state</div>
	<div class="container">
		<button class="rounded bg-blue-500 px-4 py-2 text-white" onclick={increment}> Click </button>
		<p class="mt-4">
			Thank you for clicking {count}
			{count === 1 ? 'time' : 'times'}.
		</p>
	</div>
	<div class="container mt-8">
		<label>
			<input type="checkbox" bind:checked={agreed} />
			<span>Yes! Send me regular email spam</span>
		</label>

		{#if agreed}
			<p>Thank you. We will bombard your inbox and sell your personal details.</p>
		{:else}
			<p>You must opt in to continue. If you're not paying, you're the product.</p>
		{/if}
		<button
			class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
			disabled={!agreed}
		>
			Subscribe
		</button>
	</div>
</div>

<style>
	:disabled {
		background: lightgray;
	}
</style>
