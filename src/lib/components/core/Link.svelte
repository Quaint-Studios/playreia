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
		target = '_self',
		rel = undefined,
		href,

		role = undefined,
		label = undefined,

		button = false,
		primary = false,

		color = colors.link,
		hoverColor = undefined,
		backgroundColor = undefined,
		borderColor = 'transparent',

		tight = false,
		roundness = 'medium',
		underline = false,
		selected = false,
		size = 'medium',
		raw = false,

		children
	}: Props = $props();

	let hoverColorState = $state(color);
	let borderHoverColorState = $state(borderColor);
</script>

<a
	{target}
	rel={rel?.join(' ')}
	{href}
	{role}
	aria-label={label}
	style="border: 2px solid {borderHoverColorState};"
	style:color={hoverColorState ?? color}
	style:background-color={backgroundColor}
	class={['unset', 'lb-button', `lb-button--${size}`, `lb-button--roundness-${roundness}`].join(' ')}
	class:lb-button--primary={primary && button}
	class:lb-button--secondary={!primary && button}
	class:lb-button--underline={underline}
	class:lb-button--selected={selected}
	class:lb-button--raw={raw}
	class:lb-button--tight={tight}
	onmouseenter={() => {
		if (hoverColor) {
			hoverColorState = hoverColor;
			if (borderColor !== 'transparent') {
				borderHoverColorState = hoverColor;
			}
		}
	}}
	onmouseleave={() => {
		hoverColorState = color;
		borderHoverColorState = borderColor;
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
