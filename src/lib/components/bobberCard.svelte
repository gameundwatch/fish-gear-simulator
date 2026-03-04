<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Select from '$lib/components/ui/select';

	let { bobbers, selected_bobber = $bindable() } = $props();
	const bobber_names = $derived(bobbers.map((b) => b.name));
	const trigger = $derived(
		bobber_names.find((b: string) => b === selected_bobber) ?? 'select a bobber'
	);
</script>

<Card.Root>
	<Card.Header>
		<h2 class="text-xl font-bold">🪀 Bobber</h2>
	</Card.Header>
	<Card.Content>
		<Select.Root type="single" bind:value={selected_bobber}>
			<Select.Trigger class="w-full">
				{trigger}
			</Select.Trigger>
			<Select.Content>
				{#each bobber_names as bobber_name (bobber_name)}
					<Select.Item value={bobber_name}>{bobber_name}</Select.Item>
				{/each}
			</Select.Content>
		</Select.Root>
	</Card.Content>
</Card.Root>
