<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import type { NavItem } from './ListData';
	import Button from '$components/core/Button.svelte';
	import colors from '$constants/colors';
	import Icon from '@iconify/svelte';
	import Link from '$components/core/Link.svelte';

	interface Props {
		/** The id. */
		id: string;
		/** The title. */
		name: string;
		/** The items. */
		items: NavItem[];
	}

	const { id, name, items }: Props = $props();
	let show = $state(false);
	let dropdownItem: HTMLDivElement;

	onMount(() => {
		dropdownItem = document.getElementById(`mobiledropdown_${id}`) as HTMLDivElement;
	});
</script>

<div id={`mobiledropdown_${id}`} class="nav-link" class:show>
	<Button
		haspopup={true}
		expanded={show}
		controls="{name}_submenu"
		label="{name} Page"
		role="menuitem"
		backgroundColor="transparent"
		color={show ? colors.gold : colors.light}
		hoverColor={colors.gold}
		size="xlarge"
		onClick={() => {
			show = !show;
			if (show && dropdownItem) dropdownItem.scrollIntoView();
		}}
	>
		<div class="flex gap-2">
			<span class="font-black">{name}</span>
			<Icon
				icon="solar:alt-arrow-down-bold"
				class={`${show ? 'rotate-180' : 'rotate-0'} transition-transform`}
			/>
		</div>
	</Button>
	<div class="nav-link-child">
		{#each items as { icon, name, href }}
			<div class="nav-link">
				<Link
					label="{name} Page"
					role="menuitem"
					{href}
					color={colors.light}
					hoverColor={colors.gold}
					size="xlarge"
					--color="var(--light)"
					--hover-color="var(--gold)"
				>
					<div class="flex gap-2">
						{#if icon}
							<Icon {icon} />
						{/if}
						<span>{name}</span>
					</div>
				</Link>
			</div>
		{/each}
	</div>
</div>

<style lang="postcss">
	@reference '$appcss';

	.nav-link-child {
		@apply mx-6 hidden flex-col;
	}

	.nav-link.show .nav-link-child {
		@apply flex;
	}
</style>
