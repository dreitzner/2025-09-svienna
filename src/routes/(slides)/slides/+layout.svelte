<script lang="ts">
	import type { LayoutProps } from "../../$types";
    let { children }: LayoutProps = $props();
</script>

<main class="bg-gray-950 text-white min-h-screen w-screen">
    {@render children()}
</main>