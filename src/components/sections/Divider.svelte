<script lang="ts">
  export let text = '';
</script>

<div class="divider">
  <div class="line"></div>
  <span>{text}</span>
  <div class="line"></div>
</div>

<style lang="postcss">
  .divider {
    @apply flex justify-center items-center gap-1;
  }

  .line {
    @apply w-full h-0.5 bg-black opacity-25 flex-grow;
  }
</style>