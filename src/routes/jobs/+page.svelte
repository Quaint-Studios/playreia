<script lang="ts">
	import { Tabs } from '@skeletonlabs/skeleton-svelte';

	import Meta from '$components/seo/Meta.svelte';
	import Section from '$components/layout/Section.svelte';
	import Content from '$components/layout/Content.svelte';
	import JobCategory from '$components/layout/JobCategory.svelte';

	let group = $state('all');

	interface Category {
		name: string;
		jobs: Job[];
	}
	interface Job {
		name: string;
		value: boolean;
		note?: string;
		member?: Member;
	}
	interface Member {
		name: string;
		link: string;
	}

	const frontend: Category = {
		name: 'Frontend',
		jobs: [
			{ name: 'UI', value: false },
			{ name: 'UX', value: false }
		]
	};

	const sound: Category = {
		name: 'Sound',
		jobs: [
			{ name: 'Music', value: true },
			{ name: 'SFX', value: false }
		]
	};

	const art: Category = {
		name: 'Art',
		jobs: [
			{ name: 'Splash Art', value: false },
			{ name: 'Marketing Art', value: false },
			{ name: 'Logo Art', value: false },
			{ name: 'Concept Art', value: false },
			{ name: 'UI Art', value: false },
			{ name: 'VFX Art', value: false },
			{ name: 'Skybox Art', value: false }
		]
	};

	const modeling: Category = {
		name: 'Modeling',
		jobs: [
			{ name: 'Character Modeling', value: false },
			{ name: 'Weapons Modeling', value: false },
			{ name: 'Enemy Modeling', value: false },
			{ name: 'Props Modeling', value: false },
			{ name: 'Skills Modeling', value: false },
			{
				name: 'Environment Modeling',
				value: true,
				member: { name: 'Abdi (@Dexodian)', link: 'https://github.com/Dexodian' }
			}
		]
	};

	const design: Category = {
		name: 'Design',
		jobs: [
			{ name: 'UI Design', value: false },
			{
				name: 'Game Design',
				value: false,
				note: 'partially filled by',
				member: { name: 'Kris (@Makosai)', link: 'https://github.com/Makosai' }
			},
			{ name: 'Web Design', value: false },
			{ name: 'Story & Lore Design', value: false }
		]
	};

	const programming: Category = {
		name: 'Programming',
		jobs: [
			{ name: 'General Programming', value: false },
			{ name: 'GLSL Shader Programming', value: false }
		]
	};

	const web: Category = {
		name: 'Web',
		jobs: [
			{ name: 'Web Development', value: false },
			{ name: 'Writing', value: false }
		]
	};

	const marketing: Category = {
		name: 'Marketing',
		jobs: [
			{ name: 'Outreach', value: false },
			{ name: 'Social Media Management', value: false }
		]
	};

	const allJobs: Category[] = [frontend, sound, art, modeling, design, programming, web, marketing];
</script>

<Meta
	titlePrefix=""
	title="Join our Team - Jobs at Reia"
	titleSuffix=""
	keywords={'reia, game, action, adventure , rpg, games, jobs, team, hiring, frontend, backend, sound, art, modeling, design, programming, marketing, positions, roles, join, team, create, best action, best adventure, best rpg, best game'}
	description="Be a part of the Reia team and help us create the best action adventure RPG game. We're looking for frontend, sound, art, modeling, design, programming, and marketing positions."
>
	{#snippet structured()}
		<script type="application/ld+json">
			{
				"@context": "https://schema.org/",
				"@type": "WebSite",
				"name": "Join our Team - Jobs at Reia",
				"url": "https://www.playreia.com/jobs"
			}
		</script>
	{/snippet}
</Meta>

<div class="readable">
	<Content tight>
		<Section>
			<h1>Jobs at Reia</h1>

			<blockquote>
				If you love action adventure RPG games like Reia then we're looking for people like you to
				join the team. We're not actively hiring just yet. But feel free to browse some of the
				position we'll be looking for in the future. If you're interested in any of the following
				positions, please contact us at <a href="mailto:jobs@playreia.com">jobs@playreia.com</a> and
				we'll be in touch.
			</blockquote>

			<Tabs
				bind:value={group}
				listJustify="justify-center"
				listBase="flex flex-wrap mt-12"
				listClasses="border-none"
			>
				{#snippet list()}
					{#each ['All', 'Frontend', 'Sound', 'Art', 'Modeling', 'Design', 'Programming', 'Marketing'] as tab}
						<Tabs.Control
							value={tab.toLowerCase()}
							stateLabelActive="selected-job"
							base="border-none"
						>
							{tab}
						</Tabs.Control>
					{/each}
				{/snippet}
				{#snippet content()}
					<Tabs.Panel value="all">
						<h2>All Jobs</h2>
						<p>
							This is a list of possible roles you can fulfill with a job here. Until they're
							filled, <a href="https://github.com/Makosai" target="_blank" rel="noopener"
								>Kris (@Makosai)</a
							>, will fill all roles.
						</p>

						{#each allJobs as { name, jobs }}
							<h3>{name}</h3>
							<ul>
								{#each jobs as { name, value, note, member }}
									<li>
										<div>
											<input
												type="checkbox"
												readonly
												onclick={() => false}
												disabled
												checked={value}
											/>
											<span>{name}</span>
											{#if member}
												<span>
													[<i>{note}</i><a href={member.link} target="_blank" rel="noopener"
														>{member.name}</a
													>]
												</span>
											{/if}
										</div>
									</li>
								{/each}
							</ul>
						{/each}
					</Tabs.Panel>
					<Tabs.Panel value="frontend">
						<JobCategory category={frontend} />
					</Tabs.Panel>
					<Tabs.Panel value="sound">
						<JobCategory category={sound} />
					</Tabs.Panel>
					<Tabs.Panel value="art">
						<JobCategory category={art} />
					</Tabs.Panel>
					<Tabs.Panel value="modeling">
						<JobCategory category={modeling} />
					</Tabs.Panel>
					<Tabs.Panel value="design">
						<JobCategory category={design} />
					</Tabs.Panel>
					<Tabs.Panel value="programming">
						<JobCategory category={programming} />
					</Tabs.Panel>
					<Tabs.Panel value="marketing">
						<JobCategory category={marketing} />

						<h3>Outreach</h3>
						<blockquote>
							<p>
								The ideal candidate for the <strong>outreach position</strong> would be someone who has
								experience sending well-written emails to a mass group of people and can keep in touch
								with them all. This candidate would be responsible for upkeeping the relations with them.
							</p>
						</blockquote>
						<p>
							This requires sending emails out to other companies for articles and backlinks to
							cover the project. It also requires engaging with other creators, gamers, developers,
							and people that are simply interested in the idea of this project. This person would
							be responsible for getting the word out.
						</p>

						<p>
							While we have a list of companies and individuals to reach out to, we're looking for
							someone who knows how to get in touch with more. The goal is to spread awareness so
							the ball doesn't stop with our existing list. It'll continuously grow. And we don't
							plan to do spammy contacts. We want to actually get to know them personally.
						</p>

						<h3>Social Media Management</h3>
						<p>
							This job would require someone who knows the technical side of what's going on in the
							project and can explain it to the public in a way that can be widely understood. This
							person would be responsible for posting on all of the socials and keeping the
							community updated on what's going on with the project.
						</p>
						<p>
							This website has all of the socials on it at the bottom. They're all @playreia for
							YouTube, TikTok, Pinterest, Instagram, Facebook, Twitter, and LinkedIn. Bluesky is
							registered @playreia.com. We won't really be posting on any of those accounts until we
							launch the live pre-alpha and post it on Steam. Bluesky has been getting occasionally
							updates recetly.
						</p>
					</Tabs.Panel>
				{/snippet}
			</Tabs>
		</Section>
	</Content>
</div>

<style lang="postcss">
	:global(.selected-job) {
		@apply border-none bg-r-midnight-600 text-white;
	}
	h1 {
		@apply mb-4 w-full text-center;
	}
	h2 {
		@apply mb-4 mt-12 px-0;
	}
	h3 {
		@apply mt-10;
	}

	p {
		@apply mt-4;
	}

	blockquote p {
		@apply mt-0;
	}

	li {
		@apply list-none;
	}

	li div {
		@apply inline-flex items-center gap-2;
	}
</style>
