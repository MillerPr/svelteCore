import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=search&srsearch=${encodeURIComponent(params.slug)}`;

	try {
		const response = await fetch(apiUrl);
		if (!response.ok) {
			throw new Error(response.status.toString());
		}
		const wikiResults = await response.json();
		console.log('Fetched wikiResults:', wikiResults);
		console.log('Search results:', wikiResults.query.search);

		return {
			results: wikiResults.query.search
		};
	} catch (error) {
		console.error('Error fetching from Wikipedia:', error);
		throw error;
	}
};
