<script lang="ts">
import type { HTMLAttributes } from 'svelte/elements';
let { ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>
<div class={['flex aspect-square w-50 items-center justify-end bg-blue-700 p-4 text-2xl text-white rounded-full',rest.class]}>
	blue<br />circle
</div>
