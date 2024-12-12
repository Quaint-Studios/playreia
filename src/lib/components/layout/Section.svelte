<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		/** The section icons. */
		icons?: string[];
		/** The section title. */
		title: string;
		/** The section lead. */
		lead?: string;
		/** The section color. */
		color?: string;
		/** The section bg color. */
		backgroundColor?: string;
		/** Title positioning. */
		titlePosition?: 'left' | 'center' | 'right';
		/** Content positioning. */
		contentPosition?: 'start' | 'center' | 'end';
		/** The section contents. */
		children: Snippet<[]>;
	}

	const {
		icons = ['mdi:minus', 'mdi:circle-medium', 'mdi:rhombus'],
		title,
		lead,
		color = '#323232',
		backgroundColor = 'transparent',
		titlePosition = 'left',
		contentPosition = 'start',
		children
	}: Props = $props();
</script>

<div style="background-color: {backgroundColor}" class="w-full">
	<section>
		<div class="icons gap-3">
			<div class="icons">
				{#each icons as icon}
					<Icon {icon} {color} font-size={12} />
				{/each}
			</div>
			<h2 class="mb-2 w-full" class:lead style="color: {color}; text-align: {titlePosition}">
				{@html title}
			</h2>
			<div class="icons">
				{#each icons.slice().reverse() as icon}
					<Icon {icon} {color} font-size={12} />
				{/each}
			</div>
		</div>
		{#if lead}
			<p class="lead" style="color: {color}; text-align: {titlePosition}">
				{lead}
			</p>
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
	section {
		@apply mx-auto w-full px-4 py-12;
		@apply relative flex max-w-screen-xl flex-col items-center justify-center space-y-4;
	}

	.content {
		@apply flex w-full flex-col;
	}

	h2.lead {
		@apply mb-0 text-lg;
	}
	p.lead {
		@apply !mt-0 w-full text-4xl font-black;
	}

	.icons {
		@apply flex items-center justify-center;
	}
</style>
