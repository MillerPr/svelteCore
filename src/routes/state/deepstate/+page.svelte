<script>
	let numbers = $state([1, 2, 3, 4]);

	function addNumber() {
		numbers.push(numbers.length + 1);
	}
</script>

<div class="container">
	<div class="pb-5 font-bold">deep state</div>
	<button
		class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
		onclick={addNumber}
	>
		Click
	</button>
	<p>Add these up: {numbers.join(' + ')} =</p>
</div>
