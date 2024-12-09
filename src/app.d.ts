// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	type HTMLAttributeAnchorRel =
		| 'alternate'
		| 'author'
		| 'bookmark'
		| 'external'
		| 'help'
		| 'license'
		| 'next'
		| 'nofollow'
		| 'noreferrer'
		| 'noopener'
		| 'prev'
		| 'search'
		| 'tag';

	type HTMLEvent<T extends HTMLElement> = MouseEvent & {
		currentTarget: EventTarget & T;
	};

	type Platforms = 'Desktop' | 'Console' | 'Mobile';
}

export {};
