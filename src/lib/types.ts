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
