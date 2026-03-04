<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Select from '$lib/components/ui/select';

	let {
		rods,
		rod_enchants,
		selected_rod = $bindable(),
		selected_rod_enchant = $bindable(),
	} = $props();
	const rod_names = $derived(rods.map((f: GearStatsType) => f.name));
	const rod_enchant_names = $derived(rod_enchants.map((f: EnchantStatsType) => f.name));
	const rodTrigger = $derived(rod_names.find((r: string) => r === selected_rod) ?? 'select a rod');
	const rodEnchantTrigger = $derived(
		rod_enchant_names.find((r: string) => r === selected_rod_enchant) ?? 'select a enchant'
	);
</script>

<Card.Root>
	<Card.Header>
		<h2 class="text-xl font-bold">🎣 Rod</h2>
	</Card.Header>
	<Card.Content class="grid grid-cols-1 gap-2">
		<!-- Base Rod Stats -->
		<Select.Root type="single" bind:value={selected_rod}>
			<Select.Trigger class="w-full">
				{rodTrigger}
			</Select.Trigger>
			<Select.Content class="dark">
				{#each rod_names as rod_name (rod_name)}
					<Select.Item value={rod_name}>{rod_name}</Select.Item>
				{/each}
			</Select.Content>
		</Select.Root>
		<h3 class="mt-2 font-bold">🔮Enchant</h3>
		<!-- Enchants -->
		<Select.Root type="single" bind:value={selected_rod_enchant}>
			<Select.Trigger class="w-full">
				{rodEnchantTrigger}
			</Select.Trigger>
			<Select.Content class="dark">
				<Select.Label>Common</Select.Label>
				{#each rod_enchant_names as rod_enchant_name (rod_enchant_name)}
					<Select.Item value={rod_enchant_name}>{rod_enchant_name}</Select.Item>
				{/each}
			</Select.Content>
		</Select.Root>
	</Card.Content>
</Card.Root>
