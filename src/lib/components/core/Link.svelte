<script lang="ts">
	import colors from '$lib/constants/colors';
	import type { Snippet } from 'svelte';
	import type { AriaRole, HTMLAttributeAnchorTarget } from 'svelte/elements';

	interface Props {
		/** The target. */
		target?: HTMLAttributeAnchorTarget;
		/** The rel. */
		rel?: HTMLAttributeAnchorRel[];
		/** The URL to link to. */
		href: string;

		/** The role. */
		role?: AriaRole;
		/** The label. */
		label?: string;

		/** Show it as a button. */
		button?: boolean;
		/** Is this the principal call to action on the page? */
		primary?: boolean;
		/** What color to use. */
		color?: string;
		/** What hover color to use. */
		hoverColor?: string;
		/** What background color to use. */
		backgroundColor?: string | undefined;
		/** What border color to use. */
		borderColor?: string;
		/** Tighten the padding */
		tight?: boolean;
		tighter?: boolean;
		/** Should the link be underlined on hover? */
		/** How round should the button be? */
		roundness?: 'small' | 'medium' | 'large' | 'full';
		underline?: boolean;
		/** Should the link be underlined less on hover? */
		selected?: boolean;

		/** How large should the button be? */
		size?: 'small' | 'medium' | 'large' | 'xlarge';
		/** Use raw styles. */
		raw?: boolean;

		/** Button contents. */
		children: Snippet<[]>;
	}

	const {
		target,
		rel = undefined,
		href,

		role = undefined,
		label = undefined,

		button = false,
		primary = false,

		tight = false,
		tighter = false,
		roundness = 'medium',
		underline = false,
		selected = false,
		size = 'medium',
		raw = false,

		children
	}: Props = $props();
</script>

<a
	{target}
	rel={rel?.join(' ')}
	{href}
	{role}
	aria-label={label}
	class={['unset', 'lb-button', `lb-button--${size}`, `lb-button--roundness-${roundness}`].join(
		' '
	)}
	class:lb-button--primary={primary && button}
	class:lb-button--secondary={!primary && button}
	class:lb-button--underline={underline}
	class:lb-button--selected={selected}
	class:lb-button--raw={raw}
	class:lb-button--tight={tight}
	class:lb-button--tighter={tighter}
>
	{@render children()}
</a>

<style lang="postcss">
	a {
		color: var(--color) !important;
		background-color: var(--bg-color);
	}
	a:hover {
		color: var(--hover-color) !important;
		background-color: var(--hover-bg-color);
	}
	.lb-button--selected {
		@apply font-black;
	}
	.lb-button::after {
		display: contents;
		width: 0;
		background-color: var(--hover-color);
	}
</style>
