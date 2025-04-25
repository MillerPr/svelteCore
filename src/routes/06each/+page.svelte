<script lang="ts">
	let groceryList: Array<{ name: string; quantity: number; unitPrice: number }> = [
		{ name: 'Apples', quantity: 5, unitPrice: 0.5 },
		{ name: 'Bananas', quantity: 3, unitPrice: 0.25 },
		{ name: 'Oranges', quantity: 10, unitPrice: 0.75 }
	];
</script>

<div class="container">
	<div class="pb-5 font-bold">#each</div>
	<div>
		{#each groceryList as { name, quantity, unitPrice }}
			<p>
				${(quantity * unitPrice).toFixed(2)} -- {quantity}
				{name} (@ ${unitPrice.toFixed(2)} ea.).
			</p>
		{:else}
			<p class="text-red-500">No items in the grocery list.</p>
		{/each}
	</div>
</div>
