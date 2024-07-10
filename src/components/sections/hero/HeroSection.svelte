<script lang="ts">
	import Divider from '../Divider.svelte';
	import Lazy from 'svelte-lazy';
</script>

<section class="section hero">
	<div class="hero-content">
		<h2><strong>Explore</strong> endless magical worlds in <strong>Reia</strong>!</h2>
		<h3>
			Reia is an action-adventure RPG and also an open-source game. Play offline or online with
			friends, or login for an MMO experience! Create and explore worlds, manage your own economy
			and products, and restore Reia's world via the story. Choose the way you want to play.
		</h3>

		<div class="cta">
			<a href="/play" class="btn primary">Play Now</a>
			<Divider text="or" />
			<form>
				<label for="email">Email</label>
				<input type="email" id="email" name="email" placeholder="Enter your email" />
				<button type="submit" class="btn secondary variant-filled">Notify Me</button>
			</form>
		</div>
	</div>
	<div class="hero-image">
		<Lazy keep={true}>
			<enhanced:img
				class="hero-image"
				src="$assets/images/hero/hero_1.jpg"
				alt="A forest, flower field, and path"
				title="Flower Field and Path"
			/>
		</Lazy>
	</div>
</section>

<style lang="postcss">
	.hero {
		@apply relative;
		@apply pt-[105px] pb-40;
	}

	.hero-image {
		@apply absolute w-full top-0 left-0;
		@apply object-cover h-[calc(100%+10rem)];
		z-index: -1;
	}
</style>
