export interface NavItem {
	name: string;
	href: string;
	icon?: string;
	children?: NavItem[];
}

// Must not have children more than 3 levels deep
export default [
	{ name: 'Home', href: '/' },
	{ name: 'Blog', href: '/blog' },
	{ name: 'About Us', href: '/about' },
	{
		name: 'Learn',
		href: '/learn',
		children: [
			{
				name: 'Explore Reia',
				href: '/learn',
				icon: 'solar:book-bookmark-minimalistic-bold'
			},
			{
				name: 'Characters',
				href: '/learn/characters',
				icon: 'fluent:people-16-filled',
				children: [
					{ name: 'Spirits', href: '/learn/characters/spirits' },
					{ name: 'NPCs', href: '/learn/characters/npcs' },
					{ name: 'Monsters', href: '/learn/characters/monsters' },
					{ name: 'Bosses', href: '/learn/characters/bosses' }
				]
			},
			{
				name: 'Items',
				href: '/learn/items',
				icon: 'hugeicons:potion',
				children: [
					{ name: 'Weapons', href: '/learn/items/weapons' },
					{ name: 'Soulstones', href: '/learn/items/soulstones' },
					{ name: 'Consumables', href: '/learn/items/consumables' },
					{ name: 'Quest Items', href: '/learn/items/quest-items' },
					{ name: 'Equipment', href: '/learn/items/equipment' },
					{ name: 'Materials', href: '/learn/items/materials' }
				]
			},
			{
				name: 'Locations',
				href: '/learn/locations',
				icon: 'icons8:adventures',
				children: [
					{ name: 'Cities', href: '/learn/locations/cities' },
					{ name: 'Dungeons', href: '/learn/locations/dungeons' },
					{ name: 'Infinite City', href: '/learn/locations/infinite-city' }
				]
			},
			{
				name: 'Lore',
				href: '/learn/lore',
				icon: 'ion:book',
				children: [{ name: 'Ethereals', href: '/learn/lore/ethereals' }]
			},
			{ name: 'Skills', href: '/learn/skills', icon: 'game-icons:comet-spark' },
			{ name: 'Gameplay', href: '/learn/gameplay', icon: 'tabler:cube-spark' },
			{ name: 'Guides', href: '/learn/guides', icon: 'ep:guide' }
		]
	},
	{
		name: 'Press-Kit',
		href: '/press-kit',
		children: [
			{ name: 'Browse Press-Kit', href: '/press-kit', icon: 'typcn:camera' },
			{
				name: 'Game Design Document',
				href: '/game-design-document',
				icon: 'fluent:design-ideas-16-filled'
			}
		]
	},
	{
		name: 'Contribute',
		href: '/contribute',
		children: [
			{ name: 'How to Help', href: '/contribute', icon: 'mdi:help-outline' },
			{ name: 'Backers', href: '/contribute/backers', icon: 'icon-park-outline:funds' },
			{ name: 'GitHub', href: 'https://github.com/Quaint-Studios/Reia', icon: 'fa-brands:github-alt' },
			{ name: 'Jobs', href: '/jobs' }
		]
	},
] as NavItem[];
