<script lang="ts">
	import colors from '$lib/constants/colors';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributeAnchorTarget } from 'svelte/elements';

	interface Props {
		/** The target. */
		target?: HTMLAttributeAnchorTarget;
		/** The rel. */
		rel?: HTMLAttributeAnchorRel;
		/** The URL to link to. */
		href: string;

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
		/** Should the link be underlined on hover? */
		underline?: boolean;
		/** Should the link be underlined less on hover? */
		selected?: boolean;

		/** How round should the button be? */
		roundness?: 'small' | 'medium' | 'large' | 'full';
		/** How large should the button be? */
		size?: 'small' | 'medium' | 'large' | 'xlarge';
		/** Use raw styles. */
		raw?: boolean;

		/** Button contents. */
		children: Snippet<[]>;
	}

	const {
		target = '_self',
		rel = undefined,
		href,

		button = false,
		primary = false,

		color = colors.link,
		hoverColor = undefined,
		backgroundColor = undefined,
		borderColor = 'transparent',

		roundness = 'medium',
		underline = false,
		selected = false,
		size = 'medium',
		raw = false,

		children
	}: Props = $props();

	let hoverColorState = $state(color);
</script>

<a
	{target}
	{rel}
	{href}
	style="border: 2px solid {borderColor};"
	style:color={hoverColorState ?? color}
	style:background-color={backgroundColor}
	class={['lb-button', `lb-button--${size}`, `lb-button--roundness-${roundness}`].join(' ')}
	class:lb-button--primary={primary && button}
	class:lb-button--secondary={!primary && button}
	class:lb-button--underline={underline}
	class:lb-button--selected={selected}
	class:lb-button--raw={raw}
	onmouseenter={() => {
		if (hoverColor) {
			hoverColorState = hoverColor;
		}
	}}
	onmouseleave={() => {
		hoverColorState = color;
	}}
>
	{@render children()}
</a>

<style lang="postcss">
	.lb-button--selected {
		@apply font-black;
		color: var(--hover-color);
	}
	.lb-button::after {
		display: contents;
		width: 0;
		background-color: var(--hover-color);
	}
</style>
