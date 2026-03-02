<script lang="ts">
	import '../app.css';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="flex flex-col justify-center items-center w-full h-screen bg-slate-800 text-white">
	{@render children()}
</div>
