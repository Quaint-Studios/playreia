<script lang="ts">
	interface Props {
		href: string;
		label: string;
		src: string;
		alt: string;
		onClick?: () => void;
	}

	const { href, label, src, alt, onClick }: Props = $props();
</script>

<a href={href} class="brand-button" target="_blank" rel="noopener" onclick={onClick}>
	<span>{label}</span>
	<div class="brand-div">
		<img {src} {alt} />
	</div>
</a>

<style lang="postcss">
	@reference '$appcss';

	a div {
		@apply hover:scale-[105%] transition-transform duration-300;
	}

	a, span {
		@apply text-white no-underline hover:text-r-blue-default;
	}

	.brand-button {
		@apply flex flex-col items-center justify-center gap-2;
		@apply  text-r-silver-light font-medium;
	}

	.brand-div {
		@apply h-fit w-fit rounded-2xl bg-white;
	}

	img {
		@apply h-full w-full object-contain;
	}
</style>