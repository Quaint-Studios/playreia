export const blogCategoryHandler = (post: { metadata: BlogCategoryProps; default: any }) => {
	const { title, date, updated, author, category }: BlogCategoryProps = post.metadata;
	const content = post.default;

	return {
		title,
		date,
		updated,
		author,
		category,
		content
	};
}
