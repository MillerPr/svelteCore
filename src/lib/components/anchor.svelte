<script lang="ts">
	let link: { href: string; style: string; text: string } = $props();
</script>

<a href={link.href} style={link.style}>
	{link.text}
</a>
