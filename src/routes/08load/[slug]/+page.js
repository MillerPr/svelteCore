/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const { slug } = params;
	const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=search&srsearch=${encodeURIComponent(slug)}`;

	try {
		const response = await fetch(apiUrl);
		if (!response.ok) {
			throw new Error(response.status.toString());
		}
		const data = await response.json();
		console.log('Fetched data:', data);
		console.log('Search results:', data.query.search);
		console.log('Slug:', slug);
		return {
			results: data.query.search,
			slug: slug
		};
	} catch (error) {
		console.error('Error fetching from Wikipedia:', error);
		throw error;
	}
}
