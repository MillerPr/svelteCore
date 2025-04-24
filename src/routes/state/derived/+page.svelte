<script>
	let numbers = $state([1, 2, 3, 4]);
	const total = $derived(
		numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
	);
	function addNumber() {
		numbers.push(numbers.length + 1);
	}
</script>

<div class="container">
	<div class="pb-5 font-bold">derived state</div>

	<button
		class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
		onclick={addNumber}
	>
		Click
	</button>
	{#if numbers}
		<p>{total} = {numbers.join(' + ')}</p>
	{/if}
</div>
