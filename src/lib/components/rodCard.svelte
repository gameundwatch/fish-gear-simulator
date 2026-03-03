<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Select from '$lib/components/ui/select';

	let { rod_names, selected_rod = $bindable() } = $props();
	const trigger = $derived(rod_names.find((r: string) => r === selected_rod) ?? 'select a rod');
</script>

<Card.Root>
	<Card.Header>
		<h2 class="text-xl font-bold">🎣 Rod</h2>
	</Card.Header>
	<Card.Content>
		<Select.Root type="single" bind:value={selected_rod}>
			<Select.Trigger>
				{trigger}
			</Select.Trigger>
			<Select.Content>
				{#each rod_names as rod_name (rod_name)}
					<Select.Item value={rod_name}>{rod_name}</Select.Item>
				{/each}
			</Select.Content>
		</Select.Root>
	</Card.Content>
</Card.Root>
