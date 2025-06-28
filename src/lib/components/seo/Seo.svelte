<script lang="ts">
	import {
		CANONICAL_ORIGIN,
		SITE_NAME,
		COMPANY_NAME,
		KEYWORDS,
		LOCALES,
		META_LOGO
	} from '$lib/info';
	import type { Snippet } from 'svelte';
	import { baseLocale, locales } from '$lib/paraglide/runtime';
	import { page } from '$app/state';

	interface Props {
		title: string;
		description: string;
		reverseDecoration?: boolean;
		url: string;
		locale?: string;

		author?: string;
		meta_logo?: string;
		og_description?: string;
		keywords?: string[];

		structured_data: Snippet<[]>;
		children?: Snippet<[]>;
	}

	let {
		title,
		description,
		reverseDecoration = false,
		url,
		locale = baseLocale,

		author = COMPANY_NAME,
		meta_logo = META_LOGO,
		og_description = description,
		keywords = KEYWORDS,

		structured_data,
		children = undefined
	}: Props = $props();

	const _title =
		page.url.pathname !== '/' && !Object.keys(LOCALES).includes(page.url.pathname.substring(1))
			? decorate(title, reverseDecoration)
			: title;

	function decorate(title: string, reverseDecoration?: boolean): string {
		return reverseDecoration ? `${SITE_NAME} - ${title}` : `${title} - ${SITE_NAME}`;
	}
</script>

<svelte:head>
	<link rel="canonical" href={url} />

	<title>{_title}</title>

	<meta name="title" content={_title} />
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords.join(', ')} />
	<meta name="theme-color" content="#081247" />
	<meta name="robots" content="index, follow" />
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<meta name="language" content={locale} />
	<meta name="revisit-after" content="3 days" />
	<meta name="author" content={author} />

	{@render structured_data()}

	<meta property="og:logo" content="{CANONICAL_ORIGIN}/pwa/android-chrome-192x192.png" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={_title} />
	<meta property="og:description" content={og_description} />
	<meta property="og:image" content="{CANONICAL_ORIGIN}{meta_logo}" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={url} />
	<meta property="twitter:title" content={_title} />
	<meta property="twitter:description" content={og_description} />
	<meta property="twitter:image" content="{CANONICAL_ORIGIN}{meta_logo}" />

	{#if children}
		{@render children()}
	{/if}
</svelte:head>
