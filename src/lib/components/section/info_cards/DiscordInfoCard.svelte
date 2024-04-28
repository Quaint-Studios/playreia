<script>
	import Wumpus from '$lib/assets/img/banners/discord.jpg?enhanced&w=428,512,1024';

	import InfoCard from '../InfoCard.svelte';
</script>

<InfoCard title="Discord">
	<div slot="image">
		<enhanced:img src={Wumpus} alt="Discord" title="Discord" sizes="min(428px, 60vw)" />
	</div>
	<div slot="content">
		<p>
			Join our Discord server to chat with the developers and other players! Send a message to <code
				class="text-[rgb(var(--color-error-700))]">makosai</code
			> and ask to join.
		</p>
	</div>
	<div slot="action">
		<a
			class="btn variant-outline-primary"
			href="https://discord.com/users/83303489945468928"
			target="_blank"
			rel="noopener noreferrer"
		>
			{'Join'}
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
