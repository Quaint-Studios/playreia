<script lang="ts">
	import { SITE_NAME } from '$lib/info';
</script>

<a href="/" aria-label="Home" class="brand-link">
	<enhanced:img
		class="logo"
		role="banner"
		src="$images/logos/reia_logo_white_transparent.png?enhanced&w=184;168"
		alt="{SITE_NAME} Logo White Transparent"
		title={SITE_NAME}
		sizes="(min-width: 768px) 84px, 92px"
	/>
	<span class="brand-name">{SITE_NAME}</span>
</a>

<style lang="postcss">
	@reference '$appcss';

	.brand-link {
		@apply font-bold text-white no-underline;
		@apply flex items-center;
		@apply my-1.5 transition-[margin] duration-300;

		:global(picture) {
			@apply shrink-0;
		}
	}

	:global(#navbar.at-top) .brand-link {
		@apply my-5;
	}

	:global(#navbar.open) .brand-link {
		@apply !my-1.5;
	}

	.logo {
		@apply mr-2 h-14 w-14 shrink-0;
	}
	.brand-name {
		@apply hidden text-2xl lg:block;
	}
</style>
