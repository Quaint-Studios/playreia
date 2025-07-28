import type { Locale } from './paraglide/runtime';

import alinks from '$constants/alinks';
import Wumpus from '$images/banners/wumpus.png?enhanced&w=720;540;360';
import { BlogCategory } from './types';

export const SITE_NAME = 'Reia';
export const COMPANY_NAME = 'Quaint Studios LLC';
export const CANONICAL_ORIGIN = 'https://www.playreia.com';
export const CONTACT_EMAIL = 'contact@playreia.com';
export const META_LOGO = '/reia-meta.png';

export const LOCALES: { [l in Locale]: string } = Object.freeze({
	en: 'English',
	de: 'German',
	es: 'Spanish',
	zh: 'Chinese',
	fr: 'French',
	ig: 'Igbo'
});

export const socials = [
	{ id: 'discord', icon: 'lineicons:discord', href: alinks.discord },
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
		date: '2024-01-01',
		author: { name: 'Kristopher Ali', username: 'makosai' },
		category: BlogCategory.PatchNotes,
		readTime: 5
	},
	{
		href: 'https://github.com/Quaint-Studios/Reia/releases/tag/v1.0.0.4-pre-alpha',
		title: 'Patch Notes 5: Health Bars, Minimap, and Inventory',
		description:
			"It's almost time. We're getting closer. This update features health bars, a minimap, icons to identify entities on the minimap, inventory updates, and some fixes.",
		image: Wumpus,
		date: '2023-10-02',
		author: { name: 'Kristopher Ali', username: 'makosai' },
		category: BlogCategory.PatchNotes,
		readTime: 4
	},
	{
		href: 'https://github.com/Quaint-Studios/Reia/releases/tag/v1.0.0.3-pre-alpha',
		title: 'Patch Notes 4: New Character, Rigging, and Animation',
		description:
			"I don't believe anyone truly likes rigging and the time it consumes. Finally animated the character model. The character model has been changed.",
		image: Wumpus,
		date: '2023-10-01',
		author: { name: 'Kristopher Ali', username: 'makosai' },
		category: BlogCategory.PatchNotes,
		readTime: 3
	},
	{
		href: 'https://github.com/Quaint-Studios/Reia/releases/tag/v1.0.0.2-pre-alpha',
		title: 'Patch Notes 3: Better lighting, better UI, Papa-- Oh.',
		description:
			"Okay, we have a stick to fight with now. But... we can't use it? What the!?! This update includes music, improved lighting, a Sound Manager, updates to the UI, and many more. Check it out!",
		image: Wumpus,
		date: '2023-09-25',
		author: { name: 'Kristopher Ali', username: 'makosai' },
		category: BlogCategory.PatchNotes,
		readTime: 4
	},
	{
		href: 'https://github.com/Quaint-Studios/Reia/releases/tag/v1.0.0.1-pre-alpha',
		title: 'Patch Notes 2: Combat and Lighting Improvements',
		description:
			"We're slowly getting there. Only if we had something to fight with other than our fists. The lighting is improved. But... it could be better! We now have... COMBAT! You can click things. And more.",
		image: Wumpus,
		date: '2023-09-22',
		author: { name: 'Kristopher Ali', username: 'makosai' },
		category: BlogCategory.PatchNotes,
		readTime: 3
	},
	{
		href: 'https://github.com/Quaint-Studios/Reia/releases/tag/v1.0.0.0-pre-alpha',
		title: 'Patch Notes 1: Migrating from Unity to Godot.',
		description:
			"It works! We've successfully migrated from Unity to Godot. A basic level was created to test some features of the project. All Unity-related assets have been removed.",
		image: Wumpus,
		date: '2023-09-21',
		author: { name: 'Kristopher Ali', username: 'makosai' },
		category: BlogCategory.PatchNotes,
		readTime: 4
	}
];

export const KEYWORDS = [
	'Play',
	'Play the way you want',
	'Story',
	'Story-Focused Game',
	'Story Game',
	'Combat',
	'Combat-Focused',
	'Reia',
	'riea',
	'reia 2023',
	'reia game',
	'rhea game',
	'rhea',
	'reia video',
	'reia godot',
	'reia godot 4',
	'reia godot4',
	'reia Android',
	'reia Apple',
	'reia iOS',
	'reia iPhone',
	'reia mobile',
	'reia PC',
	'reia Desktop',
	'reia Console',
	'reia Playstation',
	'reia PS4',
	'reia PS5',
	'reia Microsoft',
	'reia XBOX',
	'reia register',
	'reia pre-register',
	'reia beautiful',
	'Reia indie',
	'reia good',
	'reia graphics',
	'reia launch',
	'play reia',
	'playreia',
	'reia test',
	'reia release',
	'reia registration',
	'reia review',
	'reia video',
	'game',
	'action',
	'adventure',
	'3d',
	'open world',
	'dungeons',
	'story',
	'magic',
	'multiplayer',
	'multi player',
	'singleplayer',
	'single player',
	'online',
	'offline',
	'video-game',
	'videogame',
	'video game',
	'indie',
	'MMO',
	'MMORPG',
	'oRPG',
	'godot',
	'godot4',
	'indie',
	'windows',
	'windows 10',
	'mac',
	'macos',
	'macosx',
	'linux',
	'PC',
	'Desktop',
	'PS4',
	'PS5',
	'XBOX',
	'Switch',
	'Nintendo Switch',
	'best mobile game',
	'best pc game',
	'MMO PlayStation',
	'MMORPG PS4',
	'Action RPG',
	'MMO game',
	'multiple platforms',
	'multiplayer game',
	'multiplayer mobile game',
	'action role-playing game',
	'indie game',
	'indie company',
	'small indie company',
	'listen to feedback',
	'community',
	'open-source game',
	'code',
	'github',
	'github game',
	'character creator',
	'open world exploration',
	'action adventure',
	'character creation',
	'character creator',
	'character customization',
	'skill tree',
	'passive',
	'income',
	'economy'
];
