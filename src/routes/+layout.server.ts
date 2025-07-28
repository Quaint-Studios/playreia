import { CANONICAL_ORIGIN } from '$lib/info';
import { baseLocale, extractLocaleFromUrl, localizeUrl } from '$lib/paraglide/runtime';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url }) => {
	const canonical_url = new URL(`${CANONICAL_ORIGIN + url.pathname}`).toString();

	return {
		url: localizeUrl(canonical_url).toString(),
		locale: extractLocaleFromUrl(canonical_url) ?? baseLocale
	};
};
