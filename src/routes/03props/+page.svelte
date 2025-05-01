<script lang="ts">
	import OrderedList from '$lib/components/ordered-list.svelte';
	let items = ['first', 'second', 'third'];
	import Anchor from '$lib/components/anchor.svelte';
	import PageNotes from '$lib/components/page-notes.svelte';
	let pageNotes = [
		'The list of first, second, and third leverages a simple ordered list component.',
		'For the URL link examples, we spread all the properties to an Anchor component with one statement.'
	];
	const schoolLink = {
		href: 'https://www.uchicago.edu/',
		text: 'UChicago',
		style: 'color: maroon;'
	};

	const myHomepage = {
		href: '/about',
		text: 'Visit My Portfolio',
		style: 'font-weight: bold;'
	};

	const externalLink = {
		href: 'https://www.example.com',
		text: 'External Link',
		style: 'text-decoration: underline;'
	};
</script>

<div class="container">
	<div class="pb-5 font-bold">$props</div>
	<OrderedList {items} listStyle="square" />

	<div>
		<Anchor href={schoolLink.href} style={schoolLink.style} text={schoolLink.text} />
	</div>
	<div>
		<Anchor {...schoolLink} />
	</div>
	<Anchor {...myHomepage} />
	<Anchor {...externalLink} />

	<PageNotes {pageNotes} />
</div>
