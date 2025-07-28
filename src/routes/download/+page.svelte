<script lang="ts">
	import PlatformButton from '$components/core/PlatformButton.svelte';
	import NewsletterButton from '$components/footers/NewsletterButton.svelte';
	import Meta from '$components/seo/Meta.svelte';
	import alinks from '$constants/alinks';

	const desktopPlatforms = [
		{
			lead: 'Download for',
			tag: 'windows',
			store: 'Windows',
			icon: 'mdi:windows'
		},
		{
			lead: 'Download for',
			tag: 'mac',
			store: 'Mac',
			icon: 'mdi:apple'
		},
		{
			lead: 'Download for',
			tag: 'linux',
			store: 'Linux',
			icon: 'mdi:linux'
		}
	];

	const consolePlatforms = [
		{
			lead: 'Download on',
			tag: 'xbox',
			store: 'XBOX X/S',
			icon: 'mdi:xbox'
		},
		{
			lead: 'Get it on',
			tag: 'playstation',
			store: 'PS4 | PS5',
			icon: 'mdi:playstation'
		},
		{
			lead: 'Get it on the',
			tag: 'switch',
			store: 'Switch',
			icon: 'mdi:nintendo-switch'
		}
	];

	const mobilePlatforms = [
		{
			lead: 'Download on the',
			tag: 'iphone',
			store: 'App Store',
			icon: 'mdi:apple'
		},
		{
			lead: 'Get it on',
			tag: 'android',
			store: 'Google play',
			icon: 'mdi:google-play'
		}
	];
</script>

<Meta
	titlePrefix=""
	title="Reia - Download the Game and Unlock your Magical Adventure"
	titleSuffix=""
	keywords={'reia, download, download reia, download the game, download reia game, download reia action-adventure rpg, download reia action-adventure rpg game, download reia action-adventure rpg game for windows, download reia action-adventure rpg game for linux, download reia action-adventure rpg game for android, download reia action-adventure rpg game for ios, download reia action-adventure rpg game for macos, download reia action-adventure rpg game for console, download reia action-adventure rpg game for windows, download reia action-adventure rpg game for linux, download reia action-adventure rpg game for android, download reia action-adventure rpg game for ios, download reia action-adventure rpg game for macos, download reia action-adventure rpg game for console'}
	description="Download Reia, an action-adventure RPG game. Download the game for Windows, Linux, and Android. Coming soon to iOS, MacOS, and console. Get notified of updates and play the game early."
>
	{#snippet structured()}
		<script type="application/ld+json">
			{
				"@context": "https://schema.org/",
				"@type": "WebSite",
				"name": "Download Reia",
				"url": "https://www.playreia.com/download"
			}
		</script>
	{/snippet}
</Meta>

<div class="game newsletter">
	<div class="bg"></div>
	<span>Get notified</span>
	<h1>
		Subscribe for Reia's <strong>Download Updates</strong>
	</h1>
	<NewsletterButton alt />
	<p>
		We'd love to include you in the <strong>game development of Reia</strong>
		. By subscribing to the newsletter, you can keep up to date with all of the major development and
		tests we do here. This also includes whenever we have special events. Newsletter members are also
		added to a waitlist to
		<strong>play the game early</strong>
		. We'll also send you
		<strong>weekly updates</strong>
		on the game's progress and notify you when we do tests and releases.
	</p>

	<h2>Download right now</h2>
	<p>
		You can download the game right now by visiting the <a
			href={alinks.github + '/releases'}
			target="_blank"
			rel="noopener"
		>
			releases page on GitHub
		</a>
		. We're always looking for feedback and suggestions. If you have any, please feel free to
		<a href="/contact">contact us</a>
		or chat with us on
		<a target="_blank" rel="noopener noreferer" href={alinks.discord}>Discord</a>
		. The platforms we immediately support are Windows, Linux, and Android but we will be adding iOS
		and MacOS support as soon as we can. The limiting factor is the cost of the Apple Developer Program
		and the hardware to test on. The same goes for consoles.
	</p>

	<h3 id="windows">Download for Windows</h3>
	<p class="mb-4">
		Windows is the primary platform we support. You can download v1.0.0.5-pre-alpha of Reia for
		Windows right now by clicking the button below. We're always looking for feedback and
		suggestions. If you have any, please feel free to
		<a href="/contact">contact us</a>
		or chat with us on
		<a target="_blank" rel="noopener" href={alinks.discord}>Discord</a>
		. We also have a dedicated channel for support and feedback. Oour next version.
	</p>

	<PlatformButton
		href="https://github.com/Quaint-Studios/Reia/releases/download/v1.0.0.5-pre-alpha/Reia.zip"
		lead={desktopPlatforms[0].lead}
		tag={desktopPlatforms[0].tag}
		store={desktopPlatforms[0].store}
		icon={desktopPlatforms[0].icon}
	/>

	<h3 id="mac">Download for Mac</h3>
	<p>
		Mac support is coming soon. We're wrapping up our alpha phase and will start focusing on
		building for Apple devices.
	</p>

	<h3 id="linux">Download for Linux</h3>
	<p>
		Linux support is coming soon. This one is easier to do than Mac support since we can build for
		Linux using the same tools we use for Windows. It may come before we finish wrapping up the
		alpha phase.
	</p>

	<h3 id="android">Download for Android</h3>
	<p>
		We have the game built for Android already and it works. We're working on distributing it in a
		closed environment next. You can expect this to be available for our next big update which is
		v1.1.0-alpha.
	</p>

	<h3 id="ios">Download for iOS</h3>
	<p>
		iOS support is coming soon. Just like Mac support, we need to wrap up our alpha phase before we
		can start focusing on building for Apple devices.
	</p>

	<h3 id="xbox">Download for Xbox</h3>
	<p>
		We have plans for Xbox support in the future. Hopefully this one goes smoothly in the future.
		But we plan to work with <a href="https://www.w4games.com" target="_blank" rel="noopener">
			W4Games
		</a>
		to build this.
	</p>

	<h3 id="playstation">Download for PlayStation</h3>
	<p>PlayStation support will be made possible by working with W4Games to build this.</p>

	<h3 id="switch">Download for Switch</h3>
	<p>Switch support will be made possible by working with W4Games to build this.</p>
</div>

<style lang="postcss">
	@reference '$appcss';

	h2 {
		@apply mt-12;
	}
	h3 {
		@apply mt-6;
	}
	strong {
		@apply text-r-gold;
	}
	.newsletter {
		@apply relative flex min-h-dvh w-full flex-col items-center justify-center px-3 py-36;
	}
	.newsletter > * {
		@apply z-10;
	}
	.newsletter .bg {
		@apply absolute z-0 h-[calc(100dvh-128px)] w-[calc(100dvw-64px)];
		@apply bg-transparent bg-contain bg-center bg-no-repeat opacity-5 sm:opacity-[3%];
		@apply pointer-events-none;
		background-image: url('/images/backgrounds/magic-circle.svg');
	}

	span {
		@apply text-xl font-medium text-(--borderSilver);
	}
	h1 {
		@apply max-w-(--breakpoint-md) text-center text-4xl sm:text-5xl md:text-6xl;
	}
	p {
		@apply mt-6 max-w-(--breakpoint-md) text-center text-lg font-medium text-(--borderSilver) sm:text-xl;
	}
</style>
