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
	"Reia", "Reia game", "game design document", "GDD", "open source RPG", "action adventure RPG", "MMORPG", "free to play RPG", "community driven game", "cross-platform RPG", "player owned islands", "base building RPG", "infinite city", "procedural RPG", "spirit combat", "deep character customization", "online co-op", "crafting and gathering", "cozy MMORPG", "PvP MMORPG", "Godot engine game", "Rust game development", "contribute to open source game"
];
