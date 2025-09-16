<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	const { children, ...props }: HTMLButtonAttributes = $props();
</script>

<button
	{...props}
	class={[
		'rounded-md border-2 border-black bg-white px-4 py-3 text-sm font-bold leading-none hover:bg-gray-300 disabled:opacity-40',
		props.class,
	]}
>
	{@render children?.()}
</button>
