import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = async ({ parent }) => {
	const parent_data = await parent();

	return {
		keywords,
		...parent_data
	};
};

const keywords = [
	'ethereals',
	'reia',
	'liora',
	'lore',
	'deities',
	'world',
	'playreia'
];
