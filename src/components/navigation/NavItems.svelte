<script lang="ts">
	import Icon, { loadIcons } from '@iconify/svelte';

	// Preload Icons
	loadIcons(['mdi:chevron-down']);

	// Must not have children more than 3 levels deep
	const navItems = [
		{ name: 'Home', href: '/home' },
		{ name: 'Blog', href: '/blog' },
		{
			name: 'Learn',
			href: '/learn',
			children: [
				{
					name: 'Characters',
					href: '/learn/characters',
					children: [
						{ name: 'Spirits', href: '/learn/characters/spirits' },
						{ name: 'NPCs', href: '/learn/characters/npcs' },
						{ name: 'Monsters', href: '/learn/characters/monsters' },
						{ name: 'Bosses', href: '/learn/characters/bosses' }
					]
				},
				{
					name: 'Items',
					href: '/learn/items',
					children: [
						{ name: 'Weapons', href: '/learn/items/weapons' },
						{ name: 'Soulstones', href: '/learn/items/soulstones' },
						{ name: 'Consumables', href: '/learn/items/consumables' },
						{ name: 'Quest Items', href: '/learn/items/quest-items' },
						{ name: 'Equipment', href: '/learn/items/equipment' },
						{ name: 'Materials', href: '/learn/items/materials' }
					]
				},
				{
					name: 'Locations',
					href: '/learn/locations',
					children: [
						{ name: 'Cities', href: '/learn/locations/cities' },
						{ name: 'Dungeons', href: '/learn/locations/dungeons' },
						{ name: 'Infinite City', href: '/learn/locations/infinite-city' }
					]
				},
				{
					name: 'Lore',
					href: '/learn/lore',
					children: [{ name: 'Ethereals', href: '/learn/lore/ethereals' }]
				},
				{ name: 'Skills', href: '/learn/skills' },
				{ name: 'Gameplay', href: '/learn/gameplay' },
				{ name: 'Guides', href: '/learn/guides' }
			]
		},
		{ name: 'Press-Kit', href: '/press-kit' },
		{ name: 'About Us', href: '/about-us' },
		{
			name: 'Contribute',
			href: '/contribute',
			children: [
				{ name: 'Backers', href: '/contribute/backers' },
				{ name: 'GitHub', href: 'https://github.com/Quaint-Studios/Reia' }
			]
		},
		{ name: 'Jobs', href: '/jobs' }
	];
</script>

<div class="nav-items">
	{#each navItems as { name, href, children }, i}
		<div class="nav-item" class:has-children={children !== undefined}>
			<a {href}>{name}</a>
			{#if children}
				<Icon icon="mdi:chevron-down" />
				<div class="nav-children">
					<div class="nav-frame glass">
						{#each children as { name, href, children: _children }, i}
							<div class="child-item" class:has-children={_children !== undefined}>
								<a {href}>{name}</a>
								{#if _children}
									<Icon icon="mdi:chevron-down" rotate={-45} class="text-on-primary-token" />
									<div class="nav-children">
										<div class="nav-frame glass">
											{#each _children as { name, href }, i}
												<div class="child-item">
													<a {href}>{name}</a>
												</div>
											{/each}
										</div>
									</div>
								{/if}
							</div>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	{/each}
</div>

<!--
	/* Item & Child Item */
	.nav-item,
	.nav-child {
		@apply relative flex items-center justify-center;
	}

	.nav-child {
		@apply relative;
	}

	.has-children > :global(svg) {
		@apply transform rotate-0;
		@apply transition-transform duration-100 ease-in-out;
	}
	.has-children:hover > :global(svg) {
		@apply !transform !rotate-180;
	}

	/* Children and Frame */
	.nav-children {
		@apply rounded-xl p-2;
	}

	.nav-children {
		@apply absolute mt-2 z-50;
		@apply bg-gray-500 shadow-md;
		@apply flex flex-col;
		@apply flex-grow-0 flex-shrink-0 basis-full;
		@apply opacity-0 pointer-events-none;
		@apply transition-opacity duration-100 ease-in-out;
	}


	.nav-child .nav-children {
		@apply !bg-black;
	}

	.has-children:hover > .nav-children {
		@apply opacity-100 pointer-events-auto flex flex-col;
	}

	.nav-children a {
		@apply py-[0.15rem] px-4 w-full inline-block text-nowrap;
	} -->

<style lang="postcss">
	/** Nav Items */
	@media (max-width: 1050px) {
		.nav-items {
			@apply gap-6;
			@apply text-on-primary-token;
		}
	}
	.nav-items {
		@apply flex justify-start items-center gap-5 uppercase;
	}

	.nav-item,
	.child-item {
		@apply relative flex justify-center items-center text-nowrap;
	}

	/** Nav Children */
	.nav-children a {
		@apply w-full py-1;
		@apply text-on-primary-token;
	}
	a:hover {
		/* @apply text-tertiary-400; */
		@apply opacity-50;
	}
	a:active {
		@apply text-tertiary-600;
	}

	.nav-children {
		@apply hidden;
		@apply absolute top-full left-0;
	}

	.has-children:hover > .nav-children {
		@apply flex flex-col justify-center items-start;
	}

	.child-item .nav-children {
		@apply left-full top-0;
	}

	.nav-frame {
		@apply relative;
		@apply text-on-secondary-token shadow-xl;
		@apply p-4 rounded-2xl;
	}
	.nav-frame .nav-frame {
		@apply -mt-2 ml-2;
	}
</style>
