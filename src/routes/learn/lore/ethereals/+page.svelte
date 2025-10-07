<script lang="ts">
	import Content from '$components/layout/Content.svelte';
	import Section from '$components/layout/Section.svelte';

	const date = '2025-10-06';

	function getDate() {
		const dateArr = new Date(date).toDateString().split(' ').slice(1);
		dateArr[1] += ', ';
		return dateArr.join(' ');
	}
</script>

<Content>
	<Section>
		<article class="blog-post">
			<span>Lore</span>
			<h1>The Ethereals</h1>
			<div class="meta">
				<time datetime={date}>Last updated: {getDate()}</time>
			</div>

			<h2 id="reia-the-light">Reia, the Ethereal</h2>
			<p>
				<strong>Reia</strong>
				is an
				<strong>Ethereal</strong>
				, one of the deities responsible for creating the world of
				<strong>Liora</strong>
				. Physically, she is designed to embody an athletic, toned, and healthy figure at
				<strong>5'8" (173 cm)</strong>
				and
				<strong>140 lbs (63.5 kg)</strong>
				, having stopped aging as a young adult. Her striking appearance includes
				<strong>black, long, braided hair</strong>
				tied with a four-pointed star, and deep, dark brown eyes that glow when her powers are active.
				She has
				<strong>dark brown skin with a warm undertone</strong>
				and a significant birthmark on her left thigh, the very symbol of balance and harmony featured
				in the game's logo. This symbol holds deep lore, as it also represents her and her three siblings,
				with Reia herself symbolized by the star. Her clothing is form-fitting and light, favoring a
				palette of
				<strong>white, black, blues, and gold</strong>
				, accessorized with three gems in her hair signifying the elements she is channeling, and a large,
				symbolic gemstone on her hip-sash containing her official symbol.
			</p>
			<h3 id="lore-and-abilities">Lore and Abilities</h3>
			<p>
				As an Ethereal, Reia's occupation is that of a world-creator with limitless power within her
				domain. Her personality is defined by being <strong>
					benevolent, kind, pure, vibrant, and fiercely protective
				</strong>
				. She is uniquely gifted with the rare ability to wield
				<strong>multiple elements simultaneously</strong>
				such as hydro, pyro, electro, aero, terra, luma, and umbra. This comes at the cost of her lacking
				mastery over any single element. She channels this power through a magical focus, a tool she
				uses to conjure weapons of pure energy, including a bow, a sword, and a polearm, although she
				doesn't require it to use her abilities. Her story is intrinsically linked to her siblings, also
				Ethereals. The initial conflict of the narrative centers on a betrayal by one of her two brothers,
				which forces her to seal herself away within one of her own crystal abilities to protect Liora.
			</p>
			<h3 id="the-world-of-liora">The World of Liora</h3>
			<p>
				<strong>Liora</strong>
				is an adventure-filled world blending
				<strong>Fantasy, Magical Realism, and Adventure</strong>
				. It's a vibrant realm featuring diverse landscapes and a cohesive mix of
				<strong>medieval and modern technology</strong>
				, where magic is an inherent and active force. While the presence of Ethereals is known, they
				are not fully understood by the inhabitants, which include
				<strong>Humans and Magical Creatures</strong>
				. The society is a rich tapestry of different cultures and beliefs, all influenced by the myths
				and legends surrounding the Ethereals. The balance of Liora, and other worlds, is under threat
				from both internal factional tensions and external dark forces.
			</p>
		</article>
	</Section>
</Content>

<style lang="postcss">
	@reference '$appcss';

	span,
	time {
		@apply text-r-gold-2 flex justify-center text-sm;
	}
	.meta {
		@apply mt-4 mb-8 flex flex-col items-center text-lg;

		time {
			@apply text-r-border-silver/75 mb-8;
		}
	}

	h1 {
		@apply text-center;
	}

	h2,
	h3 {
		@apply mt-10 mb-2;
	}

	.blog-post h1 {
		@apply text-center text-4xl sm:text-6xl;
	}

	.blog-post h2 {
		@apply mt-12 mb-4 text-2xl sm:text-4xl;
	}

	.blog-post h1,
	.blog-post h2,
	.blog-post h3,
	.blog-post p {
		@apply mx-auto max-w-screen-md;
	}

	article.blog-post,
	.blog-post {
		@apply w-full sm:text-lg;
	}
</style>
