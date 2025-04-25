<script lang="ts">
	let { pageNotes = $bindable() } = $props();
</script>

{#if pageNotes}
	<div class="container mt-8">
		<p class="text-2xl font-bold">Notes:</p>
		{#each pageNotes as pageNote}
			<div class="mt-4 rounded bg-gray-100 p-4">
				<p class="text-lg">{pageNote}</p>
			</div>
		{/each}
	</div>
{/if}
