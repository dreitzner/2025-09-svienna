<script lang="ts">
import type { HTMLAttributes } from 'svelte/elements';
let { ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>
<div class={['flex aspect-square w-50 items-center bg-pink-700 p-4 text-2xl text-white',rest.class]}>
	pink<br />square
</div>
