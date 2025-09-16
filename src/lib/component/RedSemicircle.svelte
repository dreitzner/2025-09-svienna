<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	let { ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
	class={[
		'red-semicircle flex aspect-2/1 w-50 items-center justify-end rounded-full bg-red-700 p-4 text-2xl text-white mt-12',
		rest.class,
	]}
>
	red<br />semicircle
</div>

<style>
	.red-semicircle {
		border-radius: calc(var(--spacing) * 25) calc(var(--spacing) * 25) 0 0;
	}
</style>
