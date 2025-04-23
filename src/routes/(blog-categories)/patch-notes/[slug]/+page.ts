import { blogCategoryHandler } from "$blog-categories/handler";

export const load = async ({ params }) =>{
	const post = await import(`../${params.slug}.svx`);
	return blogCategoryHandler(post);
};
