<script lang="ts">
	import Link from '../core/Link.svelte';
	import colors from '$lib/constants/colors';
	import Icon, { loadIcons } from '@iconify/svelte';

	let show = $state(false);

	let links = [
		{ href: '/profile', text: 'Profile' },
		{ href: '/settings', text: 'Settings' },
		{ href: '/logout', text: 'Logout' }
	];

	loadIcons(['solar:user-bold', 'solar:alt-arrow-down-linear']);
</script>

<button
	class="user-menu"
	class:show
	onmouseleave={() => (show = false)}
	onclick={() => (show = !show)}
>
	<Icon
		icon="solar:alt-arrow-down-linear"
		class="transition-transform duration-100 {show ? 'rotate-180' : ''}"
	/>
	<div class="icon-holder">
		<Icon icon="solar:user-bold" class="text-white" />
		<div class="menu-container">
			<div class="menu">
				{#each links as { href, text }}
					<Link label={text} {href} color={colors.dark} hoverColor={colors.primary}>{text}</Link>
				{/each}
			</div>
		</div>
	</div>
</button>

<style lang="postcss">
	button:hover {
		@apply border-[--deepPurple];
	}
	button:hover .icon-holder {
		@apply bg-[--deepPurple];
	}
	.user-menu {
		@apply flex items-center justify-center gap-2 rounded-[10px];
		@apply py-0.5 pl-2 pr-0.5 bg-white;
		@apply shadow-lg hover:shadow-xl;
		@apply relative;
		transition: all 0.1s ease-in-out;
		border: 2px solid #f4f4f4;
	}
	.user-menu:active {
		@apply scale-95;
	}

	.icon-holder {
		@apply aspect-square rounded-[10px] bg-[--blueHighlight] p-2;
		transition: background-color 0.1s ease-in-out;
	}
	.menu-container {
		@apply absolute z-[60] min-w-32;
		@apply right-0 top-full origin-top scale-0 pt-2;
		transition: transform 0.125s ease-in-out;
	}
	.menu {
		@apply flex w-full flex-col items-start gap-1 rounded-[10px] bg-white p-2 shadow-lg;
	}

	.user-menu.show .menu-container {
		@apply block scale-100;
	}
</style>
