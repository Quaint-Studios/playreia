<script lang="ts">
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

	interface Props {
		category: Category;
	}

	let { category }: Props = $props();
</script>

<h2>{category.name}</h2>
<ul>
	{#each category.jobs as { name, value, note, member }}
		<li>
			<div>
				<input type="checkbox" readonly onclick={() => false} disabled checked={value} />
				<span>{name}</span>
				{#if member}
					<span>
						| <i>{note}</i><a href={member.link} target="_blank" rel="noopener">{member.name}</a>
					</span>
				{/if}
			</div>
		</li>
	{/each}
</ul>

<style lang="postcss">
	@reference '$appcss';

	h2 {
		@apply mt-12 mb-4 px-0;
	}

	li {
		@apply list-none;
	}

	li div {
		@apply inline-flex items-center gap-2;
	}

	input:checked {
		@apply bg-r-gold bg-none opacity-100;
	}
</style>
