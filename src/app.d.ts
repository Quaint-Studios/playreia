import type { AvailableLanguageTag } from '../../lib/paraglide/runtime';
import type { ParaglideLocals } from '@inlang/paraglide-sveltekit';
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		paraglide: ParaglideLocals<AvailableLanguageTag>;
	}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

// types/svelte-lazy.d.ts
declare module 'svelte-lazy';