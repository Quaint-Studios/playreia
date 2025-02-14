<script lang="ts">
	import Link from '$components/core/Link.svelte';
</script>

<Link label="Home" href="/">
	<div class="brand-container">
		<enhanced:img
			class="logo"
			src="$images/logos/reia_logo_white_transparent.png?enhanced&w=184;168"
			alt="Reia Logo White Transparent"
			title="Reia"
			sizes="(min-width: 768px) 84px, 92px"
		/>
		<div class="brand-divider"></div>
		<span class="brand-name">Reia</span>
	</div>
</Link>

<style lang="postcss">
	.brand-container {
		@apply flex items-center justify-center;
	}
	.logo {
		@apply m-auto aspect-square h-16 w-16 shrink-0 grow lg:m-[unset];
	}

	.brand-divider {
		@apply mx-4 hidden h-11 border-r-2 border-solid md:block;
	}

	.brand-name {
		@apply hidden text-2xl md:block;
	}
</style>
