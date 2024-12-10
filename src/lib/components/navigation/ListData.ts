export interface NavItem {
	name: string;
	href: string;
	children?: NavItem[];
}

// Must not have children more than 3 levels deep
export default [
	{ name: 'Home', href: '/' },
	{ name: 'Blog', href: '/blog' },
	{
		name: 'Learn',
		href: '/learn',
		children: [
			{
				name: 'Characters',
				href: '/learn/characters',
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
				children: [
					{ name: 'Cities', href: '/learn/locations/cities' },
					{ name: 'Dungeons', href: '/learn/locations/dungeons' },
					{ name: 'Infinite City', href: '/learn/locations/infinite-city' }
				]
			},
			{
				name: 'Lore',
				href: '/learn/lore',
				children: [{ name: 'Ethereals', href: '/learn/lore/ethereals' }]
			},
			{ name: 'Skills', href: '/learn/skills' },
			{ name: 'Gameplay', href: '/learn/gameplay' },
			{ name: 'Guides', href: '/learn/guides' }
		]
	},
	{
		name: 'Press-Kit',
		href: '/press-kit',
		children: [{ name: 'Game Design Document', href: '/press-kit/game-design-document' }]
	},
	{ name: 'About Us', href: '/about-us' },
	{
		name: 'Contribute',
		href: '/contribute',
		children: [
			{ name: 'Backers', href: '/contribute/backers' },
			{ name: 'GitHub', href: 'https://github.com/Quaint-Studios/Reia' }
		]
	},
	{ name: 'Jobs', href: '/jobs' }
] as NavItem[];
