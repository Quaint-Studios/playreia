import type { EntryGenerator } from "./$types";

export const entries: EntryGenerator = () => {
	const files = import.meta.glob('../*.svx');
	const names = Object.keys(files).map(file => {
		if (!file.endsWith('.svx')) return undefined;
		const slug = file.split('/').pop()?.slice(0, -4);
		if (!slug) return undefined;

		return { slug };
	}).filter(entry => entry !== undefined);
	return names;
}
