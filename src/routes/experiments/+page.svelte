<script lang="ts">
	import { wait } from "$lib/utils";

    const title = $derived.by(async() => {
        await wait(10000)
        return 'Svelte'
    })
</script>

<svelte:boundary>
    Async {title}
	{#snippet pending()}
		<p>loading...</p>
	{/snippet}
</svelte:boundary>
