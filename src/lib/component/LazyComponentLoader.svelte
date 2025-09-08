<script lang="ts">
	import { lazyComponentLoader } from '$lib/utils';
	import SkeltetonLoader from './SkeltetonLoader.svelte';

	const { componentName }: { componentName: string } = $props();

	let LazyComponentPromise = $state(lazyComponentLoader(componentName));

	$effect(() => {
        // @ts-expect-error undefined is not an expected value, but we guard against it 🛡️
        if (componentName) LazyComponentPromise = undefined;
    });
	$effect(() => {
        if (!LazyComponentPromise) LazyComponentPromise = lazyComponentLoader(componentName);
    });
</script>

{#if LazyComponentPromise}
	<svelte:boundary>
		{@const LazyComponent = await LazyComponentPromise}
		<LazyComponent />
		{#snippet pending()}
			<SkeltetonLoader />
		{/snippet}
	</svelte:boundary>
{/if}
