<script lang="ts">
	import type { Snippet } from 'svelte';
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
</script>

<div class="nav-link" class:show>
	<Button
		haspopup={true}
		expanded={show}
		controls="{name}_submenu"
		label="{name} Page"
		role="menuitem"
		backgroundColor="transparent"
		color={colors.light}
		hoverColor={colors.gold}
		size="xlarge"
		onClick={() => (show = !show)}
	>
		<div class="flex gap-2">
			<Icon icon="solar:alt-arrow-down-bold" />
			<span class="font-black">{name}</span>
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
    .nav-link {
        @apply relative;
    }

    .nav-link-child {
        @apply flex-col hidden;
    }

    .nav-link.show .nav-link-child {
        @apply flex;
    }
</style>