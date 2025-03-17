<script lang="ts">
	import colors from '$constants/colors';
	import Icon from '@iconify/svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		/** The section icons. */
		icons?: string[];
		/** The section title. */
		title?: string;
		/** The section lead. */
		lead?: string;
		/** The section color. */
		color?: string;
		/** The section header color. */
		headerColor?: string;
		/** The section bg color. */
		backgroundColor?: string;
		/** Title positioning. */
		titlePosition?: 'left' | 'center' | 'right';
		/** Content positioning. */
		contentPosition?: 'start' | 'center' | 'end';
		/** Alternate styling. */
		alt?: boolean;
		/** The section contents. */
		children: Snippet<[]>;
	}

	const {
		icons = ['mdi:minus', 'mdi:circle-medium', 'mdi:rhombus'],
		lead,
		title,
		color = colors.white,
		headerColor,
		backgroundColor = 'transparent',
		titlePosition = 'center',
		contentPosition = 'start',
		alt = false,
		children
	}: Props = $props();
</script>

<div style="background-color: {backgroundColor}" class="w-full">
	<section>
		{#if lead}
			<div class="icons gap-3">
				<div class="icons">
					{#each icons as icon}
						<Icon {icon} {color} font-size={12} class="w-3 h-3" />
					{/each}
				</div>
				<p class="lead" class:alt class:lead style="color: {color}; text-align: {titlePosition}">
					{@html lead}
				</p>
				<div class="icons">
					{#each icons.slice().reverse() as icon}
						<Icon {icon} {color} font-size={12} class="w-3 h-3" />
					{/each}
				</div>
			</div>
		{/if}
		{#if title}
			<h2 style="color: {headerColor ?? color}; text-align: {titlePosition}; width: 100%">
				{title}
			</h2>
		{/if}
		<div
			class="content"
			style="color: {color}; justify-content: {contentPosition}; align-items: {contentPosition}"
		>
			{@render children()}
		</div>
	</section>
</div>

<style lang="postcss">
	@reference '$appcss';

	section {
		@apply mx-auto w-full px-4 py-14;
		@apply relative flex max-w-(--breakpoint-xl) flex-col items-center justify-center space-y-4;
	}

	.content {
		@apply flex w-full flex-col;
	}

	p.lead {
		@apply mb-0 w-full text-lg font-black;
	}

	.icons + h2 {
		@apply !mt-0;
	}

	.icons {
		@apply flex items-center justify-center mb-0;
	}
</style>
