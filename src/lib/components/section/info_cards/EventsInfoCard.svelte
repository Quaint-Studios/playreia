<script>
	import Wumpus from '$lib/assets/img/banners/newsletter.jpg?enhanced';

	import InfoCard from '../InfoCard.svelte';
</script>

<InfoCard title="Events: Testing">
	<div slot="image">
		<enhanced:img src={Wumpus} alt="Discord" title="Discord" />
	</div>
	<div slot="content">
		<p>
			Testing currently is private. But you can subscribe to our newsletter to get in on some cool
			multiplayer tests!
		</p>
	</div>
	<div slot="action">
		<a
			class="btn variant-outline-primary"
			href="https://zc.vg/IWnQL"
			target="_blank"
			rel="noopener noreferrer"
		>
			{'Subscribe'}
		</a>
	</div>
</InfoCard>

<style>
	a {
		@apply rounded-2xl;
	}

	a:hover {
		@apply variant-filled-primary;
	}
</style>
