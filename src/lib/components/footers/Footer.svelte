<script lang="ts">
	import Newsletter from './Newsletter.svelte';
	import Socials from './Socials.svelte';
</script>

<footer>
	<Newsletter />
	<Socials />

    <div class="links">
        <a href="/terms">Terms of Service</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/contact">Contact Us</a>
        <a href="/about">About Us</a>
    </div>

    <div class="copy">
        <span><a href="https://quaintstudios.com">&copy; 2021-2025 Quaint Studios LLC. All Rights Reserved</a></span>
    </div>
</footer>

<style lang="postcss">
	@reference '$appcss';
    
    .copy a {
        @apply text-inherit no-underline;
    }

	footer {
		@apply bg-r-midnight-300 pb-16;
	}

    .links {
        @apply pt-12 grid grid-cols-3 gap-y-3 sm:grid-cols-4 max-w-[600px] text-center mx-auto px-3;
    }
    .links a {
        @apply font-medium text-r-gold-2 no-underline;
    }
    .links a:nth-child(4) {
        @apply col-span-3 sm:col-span-1;
    }
    .links a:hover {
        @apply text-r-blue-default;
    }

    .copy {
        @apply flex justify-center items-center font-medium text-(--borderSilver) pt-4 px-3;
    }
</style>
