export const siteName = 'Reia';
export const website = 'https://www.playreia.com';

import alinks from '$constants/alinks';
import Wumpus from '$images/banners/wumpus.png?enhanced&w=720;540;360';
import { BlogCategory } from './types';

export const contactEmail = 'contact@playreia.com';

export const socials = [
	{ id: 'discord', icon: 'lineicons:discord', href: alinks.discordMsg },
	{ id: 'youtube', icon: 'lineicons:youtube', href: alinks.youtube },
	{ id: 'tiktok', icon: 'lineicons:tiktok', href: alinks.tiktok },
	{ id: 'bluesky', icon: 'simple-icons:bluesky', href: alinks.bluesky },
	{ id: 'mastodon', icon: 'simple-icons:mastodon', href: alinks.mastodon },
	{ id: 'twitter', icon: 'lineicons:twitter', href: alinks.twitter },
	{ id: 'instagram', icon: 'lineicons:instagram', href: alinks.instagram },
	{ id: 'facebook', icon: 'lineicons:facebook', href: alinks.facebook },
	{ id: 'linkedin', icon: 'lineicons:linkedin', href: alinks.linkedIn },
	{ id: 'pinterest', icon: 'lineicons:pinterest', href: alinks.pinterest },
	{ id: 'github', icon: 'lineicons:github', href: alinks.github },
    { id: 'opencollective', icon: 'simple-icons:opencollective', href: alinks.open_collective }
];

export const blogs: BlogData[] = [
	{
		href: 'https://github.com/Quaint-Studios/Reia/releases/tag/v1.0.0.5-pre-alpha',
		title: 'Patch Notes 6: Changelogs are Finally Here',
		description:
			"Reia is coming along nicely! I'm excited to see where this game goes. I hope you are too! This update is pretty big. It features a changelog, new main menu, vfx, new water shaders, more inventory updates, Discord SDK integration, and more.",
		image: Wumpus,
		date: '2024-1-1',
		author: { name: 'Kristopher Ali', id: '100000000' },
		category: BlogCategory.PatchNotes,
		readTime: 5
	},
	{
		href: 'https://github.com/Quaint-Studios/Reia/releases/tag/v1.0.0.4-pre-alpha',
		title: 'Patch Notes 5: Health Bars, Minimap, and Inventory',
		description:
			"It's almost time. We're getting closer. This update features health bars, a minimap, icons to identify entities on the minimap, inventory updates, and some fixes.",
		image: Wumpus,
		date: '2023-10-2',
		author: { name: 'Kristopher Ali', id: '100000000' },
		category: BlogCategory.PatchNotes,
		readTime: 4
	},
	{
		href: 'https://github.com/Quaint-Studios/Reia/releases/tag/v1.0.0.3-pre-alpha',
		title: 'Patch Notes 4: New Character, Rigging, and Animation',
		description:
			"I don't believe anyone truly likes rigging and the time it consumes. Finally animated the character model. The character model has been changed.",
		image: Wumpus,
		date: '2023-10-1',
		author: { name: 'Kristopher Ali', id: '100000000' },
		category: BlogCategory.PatchNotes,
		readTime: 3
	},
	{
		href: 'https://github.com/Quaint-Studios/Reia/releases/tag/v1.0.0.2-pre-alpha',
		title: 'Patch Notes 3: Better lighting, better UI, Papa-- Oh.',
		description:
			"Okay, we have a stick to fight with now. But... we can't use it? What the!?! This update includes music, improved lighting, a Sound Manager, updates to the UI, and many more. Check it out!",
		image: Wumpus,
		date: '2023-9-25',
		author: { name: 'Kristopher Ali', id: '100000000' },
		category: BlogCategory.PatchNotes,
		readTime: 4
	},
	{
		href: 'https://github.com/Quaint-Studios/Reia/releases/tag/v1.0.0.1-pre-alpha',
		title: 'Patch Notes 2: Combat and Lighting Improvements',
		description:
			"We're slowly getting there. Only if we had something to fight with other than our fists. The lighting is improved. But... it could be better! We now have... COMBAT! You can click things. And more.",
		image: Wumpus,
		date: '2023-9-22',
		author: { name: 'Kristopher Ali', id: '100000000' },
		category: BlogCategory.PatchNotes,
		readTime: 3
	},
	{
		href: 'https://github.com/Quaint-Studios/Reia/releases/tag/v1.0.0.0-pre-alpha',
		title: 'Patch Notes 1: Migrating from Unity to Godot.',
		description:
			"It works! We've successfully migrated from Unity to Godot. A basic level was created to test some features of the project. All Unity-related assets have been removed.",
		image: Wumpus,
		date: '2023-9-21',
		author: { name: 'Kristopher Ali', id: '100000000' },
		category: BlogCategory.PatchNotes,
		readTime: 4
	}
];
