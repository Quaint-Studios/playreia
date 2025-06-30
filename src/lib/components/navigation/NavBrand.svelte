<script lang="ts">
	import { SITE_NAME } from '$lib/info';
</script>

<a href="/" aria-label="Home" class="brand-link">
	<div class="brand-container">
		<enhanced:img
			class="logo"
			src="$images/logos/reia_logo_white_transparent.png?enhanced&w=184;168"
			alt="{SITE_NAME} Logo White Transparent"
			title={SITE_NAME}
			sizes="(min-width: 768px) 84px, 92px"
		/>
		<span class="brand-name">{SITE_NAME}</span>
	</div>
</a>

<style lang="postcss">
	@reference '$appcss';

	.brand-link {
		@apply text-white no-underline font-bold;
		@apply my-2;
	}

	:global(#navbar.at-top) .brand-link {
		@apply my-5;
	}

	.brand-container {
		@apply flex items-center;

		:global(picture) {
			@apply shrink-0;
		}
	}
	.logo {
		@apply mr-2 h-14 w-14 shrink-0;
	}
	.brand-name {
		@apply hidden text-2xl lg:block;
	}
</style>
