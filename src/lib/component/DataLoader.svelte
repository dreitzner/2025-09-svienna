<script lang="ts" generics="T">
	import SkeltetonLoader from '$lib/component/SkeltetonLoader.svelte';
	import type { Snippet } from 'svelte';

	const { promise, children }: { promise: Promise<T>; children: Snippet<[{ data: T }]> } = $props();
</script>

<svelte:boundary>
	{@const data = await promise}
	{@render children({ data })}
	{#snippet pending()}
		<SkeltetonLoader />
	{/snippet}
</svelte:boundary>
