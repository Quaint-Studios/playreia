/**
 * The proper SEO for each is:
 * * 1. News
 * * 2. Guides -> Guide
 * * 3. Events
 * * 4. Patch Notes
 * * 5. Game Updates -> Game Update
 * * 6. Dev Blog
 *
 * in that order and spelled just like that.
 */
// | 'News'
// | 'Guides'
// | 'Patch Notes'
// | 'Game Updates'
// | 'Guides'
// | 'News'
// | 'Dev Blog'
// | 'Events'
export enum BlogCategory {
	News = 'News',
	Guide = 'Guide',
	Events = 'Events',
	PatchNotes = 'Patch Notes',
	GameUpdate = 'Game Update',
	DevBlog = 'Dev Blog'
}

export const link = {
	// Use when you want to open a link in a new tab but need to keep security
	external: {
		target: '_blank',
		rel: 'noopener'
	},
	// Use on external links that are not to be followed by search engines
	// such as comments by users.
	externalnofol: {
		target: '_blank',
		rel: 'noopener noreferer nofollow'
	},
	externalnoref: {
		target: '_blank',
		rel: 'noopener noreferrer'
	},
};

export const cdn = {
	site: 'https://site.cdn.playreia.com',
}
