<script lang="ts">
	let {
		items,
		listStyle
	}: {
		items: string[];
		listStyle?: 'disc' | 'circle' | 'square' | 'decimal';
	} = $props();
</script>

<ol style="list-style-type: {listStyle}">
	{#each items as item}
		<li>{item}</li>
	{/each}
</ol>
