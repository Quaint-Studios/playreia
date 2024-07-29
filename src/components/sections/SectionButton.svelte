<script lang="ts">
	export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button';
</script>

<button {type} class="btn-dark-purple filled">
	<slot />
</button>