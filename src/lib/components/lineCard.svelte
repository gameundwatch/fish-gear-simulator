<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Select from '$lib/components/ui/select';

	let { lines, selected_line = $bindable() } = $props();
	const line_names = $derived(lines.map((l: GearStatsType) => l.name));
	const trigger = $derived(line_names.find((r: string) => r === selected_line) ?? 'select a line');
</script>

<Card.Root>
	<Card.Header>
		<h2 class="text-xl font-bold">🧵 Line</h2>
	</Card.Header>
	<Card.Content>
		<Select.Root type="single" bind:value={selected_line}>
			<Select.Trigger class="w-full">
				{trigger}
			</Select.Trigger>
			<Select.Content>
				{#each line_names as line_name (line_name)}
					<Select.Item value={line_name}>{line_name}</Select.Item>
				{/each}
			</Select.Content>
		</Select.Root>
	</Card.Content>
</Card.Root>
