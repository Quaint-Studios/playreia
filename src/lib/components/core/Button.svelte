<script lang="ts">
	import colors from '$lib/constants/colors';
	import type { Snippet } from 'svelte';
	import type { AriaRole } from 'svelte/elements';

	type Props = {
		haspopup?: boolean;
		expanded?: boolean;
		controls?: string;
		/** The label. */
		label?: string;
		/** The role. */
		role?: AriaRole;
		/** The type. */
		type?: 'button' | 'submit';

		/** Is this the principal call to action on the page? */
		primary?: boolean;

		/** What color to use. */
		color?: string;
		/** What hover color to use. */
		hoverColor?: string;
		/** What background color to use. */
		backgroundColor?: string;
		/** What border color to use. */
		borderColor?: string;

		/** How round should the button be? */
		roundness?: 'small' | 'medium' | 'large' | 'full';
		/** Should the link be underlined on hover? */
		underline?: boolean;
		/** Should the link be underlined less on hover? */
		selected?: boolean;
		/** How large should the button be? */
		size?: 'small' | 'medium' | 'large' | 'xlarge';
		/** Use raw styles. */
		raw?: boolean;

		/** The onclick event handler. */
		onClick: () => void;

		onMouseLeave?: () => void;

		/** Button contents. */
		children: Snippet<[]>;
	};

	const {
		haspopup = undefined,
		expanded = undefined,
		controls = undefined,
		label = undefined,
		role = 'button',
		type = 'button',

		primary = false,

		color = undefined,
		hoverColor = undefined,
		backgroundColor = colors.primary,
		borderColor = 'transparent',

		roundness = 'medium',
		underline = false,
		selected = false,
		size = 'medium',
		raw = false,

		onClick,
		onMouseLeave,

		children
	}: Props = $props();

	let hoverColorState = $state(color);
</script>

<button
	aria-haspopup={haspopup}
	aria-expanded={expanded}
	aria-controls={controls}
	aria-label={label}
	{role}
	{type}
	style="border: 2px solid {borderColor};"
	style:color={hoverColorState ?? color}
	style:background-color={backgroundColor}
	class={['lb-button', `lb-button--${size}`, `lb-button--roundness-${roundness}`].join(' ')}
	class:lb-button--primary={primary}
	class:lb-button--secondary={!primary}
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
		if (onMouseLeave) {
			onMouseLeave();
		}
	}}
	onclick={onClick}
>
	{@render children()}
</button>

<style lang="postcss">
	@reference '$appcss';

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
