import type { BlogCategory } from "$lib/types";

interface Props {
    title: string;
    date: string;
    author: Author;
    category: BlogCategory;
}

export async function load({ params }) {
	const post = await import(`../${params.slug}.svx`);
	const { title, date, author, category }: Props = post.metadata;
	const content = post.default;

	return {
        title,
		date,
        author,
        category,
		content
	};
}
