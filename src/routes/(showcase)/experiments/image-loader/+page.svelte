<script lang="ts">
	import { wait } from '$lib/utils';

	import sunrise from '$lib/assets/sunrise.jpg';
	import { fade } from 'svelte/transition';

	let promise = $state<Promise<string>>();
	function setPromise() {
		promise = wait(5000).then(() => sunrise);
	}
</script>

<button onclick={setPromise}>Load Image</button>

{#if promise}
	<div class="aspect-video">
		<svelte:boundary>
			{@const src = await promise}
			<img {src} class="h-full w-full object-cover" alt="sunrise" />
			{#snippet pending()}
				<!-- blurhash -->
				<img
					out:fade
					src="data:image/png;base64,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"
					alt="blurhash"
					class="h-full w-full object-cover"
				/>
			{/snippet}
		</svelte:boundary>
	</div>
{/if}
