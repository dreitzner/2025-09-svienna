<script lang="ts">
	import { lazyComponentLoader } from '$lib/utils';

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
			<div
				class="-lg h-28 w-full max-w-xs rounded-lg bg-white p-4 ring-1 ring-gray-900/5 dark:bg-gray-800"
			>
				<div class="flex animate-pulse space-x-4">
					<div class="size-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
					<div class="flex-1 space-y-6 py-1">
						<div class="h-2 rounded bg-gray-200 dark:bg-gray-700"></div>
						<div class="space-y-3">
							<div class="grid grid-cols-3 gap-4">
								<div class="col-span-2 h-2 rounded bg-gray-200 dark:bg-gray-700"></div>
								<div class="col-span-1 h-2 rounded bg-gray-200 dark:bg-gray-700"></div>
							</div>
							<div class="h-2 rounded bg-gray-200 dark:bg-gray-700"></div>
						</div>
					</div>
				</div>
			</div>
		{/snippet}
	</svelte:boundary>
{/if}
