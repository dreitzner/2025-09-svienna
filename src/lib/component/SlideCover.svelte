<script lang="ts">
	interface Props {
		id?: string | null;
		animate?: boolean | null;
		restart?: boolean | null;
		children: import('svelte').Snippet;
	}

	let { id = null, animate = null, restart = null, children }: Props = $props();
</script>

<section
	data-auto-animate-id={id}
	data-auto-animate={animate}
	data-auto-animate-restart={restart}
	class="flex h-full items-center justify-center"
>
	{@render children()}
</section>
