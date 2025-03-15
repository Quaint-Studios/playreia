<script lang="ts">
	import Section from '$components/layout/Section.svelte';
	import Content from '$components/layout/Content.svelte';
	import Meta from '$components/seo/Meta.svelte';

	import KristopherAli from '$images/team/kristopher_ali.png?enhanced';
	import AbdishakurMohamed from '$images/team/abdishakur_mohamed.png?enhanced';

	const team = [
		{
			name: 'Kristopher Ali',
			handle: 'Makosai',
			role: ['Founder', 'Programmer', 'Designer'],
			avatar: KristopherAli,
			bio: 'Kris is a software developer with a passion for creating games. He is the founder of Reia and the lead developer on the project.'
		},
		{
			name: 'Abdishakur Mohamed',
			handle: 'Dexodian',
			role: ['Environmental Artist'],
			avatar: AbdishakurMohamed,
			bio: 'Abdi is an environmental artist with a passion for creating beautiful worlds. He is responsible for creating the environments in Reia.'
		}
	];
</script>

<!-- <TODO> PAGE -->
<Meta
	title="About Us"
	description="Learn all about Reia, the team, and the development journey. Find out why this project was started, our process, what we've learned, and what we plan to do!"
>
	{#snippet structured()}
		<script type="application/ld+json">
			{
				"@context": "https://schema.org",
				"@type": "Project",
				"name": "About Reia",
				"url": "https://www.playreia.com/about",
				"description": "Learn all about Reia, the team, and the development journey. Find out why this project was started, our process, what we've learned, and what we plan to do!",
				"logo": "https://www.playreia.com/reia_logo_meta.png",
				"sameAs": [
					"https://opencollective.playreia.com",
					"https://github.playreia.com",
					"https://pinterest.playreia.com",
					"https://linkedin.playreia.com",
					"https://facebook.playreia.com",
					"https://instagram.playreia.com",
					"https://twitter.playreia.com",
					"https://mastadon.playreia.com",
					"https://bluesky.playreia.com",
					"https://tiktok.playreia.com",
					"https://youtube.playreia.com",
					"https://discord.playreia.com",
					"https://playreia.com"
				]
			}
		</script>
	{/snippet}
</Meta>

<Content>
	<Section>
		<div class="content">
			<h1>About Us: Reia and the Team</h1>

			<div class="bg quote">
				<em>
					"Reia is a game that I started as a passion project. I wanted to create a game that I
					would love to play myself. I also wanted to deeply understand every process of creating a
					game so I can communicate with the team more effectively."
				</em>
				<em class="author">— Kristopher Ali</em>
			</div>

			<h2>Meet the Team</h2>

			{#each team as { name, handle, role, avatar, bio }, i}
				<div class="bg profile">
					<div class="img-container">
						<enhanced:img src={avatar} alt={name} class="img" />
					</div>
					<div class="info">
						<div class="name">
							<h3>{name}</h3>
							<span class="font-medium">@{handle}</span>
						</div>
						<span class="mb-2 text-(--borderSilver)">{role.join(' | ')}</span>
						<p>{bio}</p>
					</div>
				</div>
			{/each}

			<h2>Our Mission</h2>

			<p>
				The goal with Reia is to create a game that is fun, engaging, and challenging. To create a
				game that would take you on an adventure, and that would allow you to explore endless
				worlds.
			</p>
		</div>
	</Section>
</Content>

<style lang="postcss">
	h1 {
		@apply w-full text-center text-4xl sm:text-6xl;
	}

	h2 {
		@apply mb-4 mt-16 w-full text-center text-3xl text-r-gold sm:text-4xl;
	}

	h3 {
		@apply text-xl sm:text-2xl;
	}

	.quote {
		@apply mb-6 mt-12 flex flex-col;

		.author {
			@apply w-full text-end;
		}
	}

	.content {
		@apply mx-auto max-w-screen-md;
	}

	.profile:nth-child(odd) {
		@apply ml-auto flex-row-reverse;

		.name {
			@apply !items-end sm:flex-row-reverse;
		}
	}

	.profile {
		@apply mt-6 flex max-w-(--breakpoint-sm) gap-4 odd:text-right;
		.img-container {
			@apply aspect-square h-28 w-28;
			.img {
				@apply aspect-square object-cover;
			}
		}
		.info {
			@apply flex shrink grow-0 flex-col gap-0;
			.name {
				@apply flex flex-col items-start gap-0 text-end sm:gap-1;
			}
			h3 {
				@apply mb-0;
			}
		}
	}
</style>
