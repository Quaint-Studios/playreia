<script lang="ts">
	export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button';
	export let aria_label: string;
</script>

<button aria-label={aria_label} {type} class="btn-dark-purple filled">
	<slot />
</button>