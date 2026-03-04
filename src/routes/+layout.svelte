<script lang="ts">
	import '../app.css';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div
	class="flex flex-col justify-center items-center w-full h-screen bg-linear-to-b from-indigo-900 to-slate-900 text-white"
>
	{@render children()}
</div>
