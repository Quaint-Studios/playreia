<script lang="ts">
	import Link from '../core/Link.svelte';
	import colors from '$lib/constants/colors';
	import Icon from '@iconify/svelte';

	let show = $state(false);
	let signedIn = false;

	let links = signedIn ? [
		{ href: '/profile', text: 'Profile' },
		{ href: '/profile/settings', text: 'Settings' },
		{ href: '/logout', text: 'Logout' }
	] : [
		{ href: '/login', text: 'Login' },
		{ href: '/register', text: 'Register' }
	];
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
		color={colors.dark}
	/>
	<div class="icon-holder">
		<div class="h-4 w-4">
			<Icon icon="solar:user-bold" class="text-white h-full w-full" />
		</div>
		<div class="menu-container">
			<div class="menu">
				{#each links as { href, text }}
					<Link label={text} {href} class="text-r-black hover:text-r-primary" --color="var(--black)" --hover-color="var(--primary)">
						{text}
					</Link>
				{/each}
			</div>
		</div>
	</div>
</button>

<style lang="postcss">
	button:hover {
		@apply border-r-purple-deep;
	}
	button:hover .icon-holder {
		@apply bg-r-purple-deep;
	}
	.user-menu {
		@apply flex items-center justify-center gap-2 rounded-[10px];
		@apply bg-white py-0.5 pl-2 pr-0.5;
		@apply shadow-lg hover:shadow-xl;
		@apply relative;
		transition: all 0.1s ease-in-out;
		border: 2px solid #f4f4f4;
	}
	.user-menu:active {
		@apply scale-95;
	}

	.icon-holder {
		@apply aspect-square rounded-[10px] bg-r-blue-highlight p-2;
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
