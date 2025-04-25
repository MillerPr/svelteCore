<script>
	import PageNotes from '$lib/components/page-notes.svelte';
	const pageNotes = [
		'This example only demonstrates that mutating an array also triggers rendering based on a change to state.',
		'See the $derived state page for how we update the total.'
	];
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
<PageNotes {pageNotes} />
