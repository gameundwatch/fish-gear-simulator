<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Select from '$lib/components/ui/select';

	let {
		rods,
		rod_enchants,
		selected_rod = $bindable(),
		selected_rod_enchant = $bindable(),
	} = $props();

	const common_rod_enchant_names = $derived(
		rod_enchants
			.filter((f: EnchantStatsType) => f.grade === 'common')
			.map((f: EnchantStatsType) => f.name)
	);
	const uncommon_rod_enchant_names = $derived(
		rod_enchants
			.filter((f: EnchantStatsType) => f.grade === 'uncommon')
			.map((f: EnchantStatsType) => f.name)
	);
	const rare_rod_enchant_names = $derived(
		rod_enchants
			.filter((f: EnchantStatsType) => f.grade === 'rare')
			.map((f: EnchantStatsType) => f.name)
	);
	const epic_rod_enchant_names = $derived(
		rod_enchants
			.filter((f: EnchantStatsType) => f.grade === 'epic')
			.map((f: EnchantStatsType) => f.name)
	);
	const legendary_rod_enchant_names = $derived(
		rod_enchants
			.filter((f: EnchantStatsType) => f.grade === 'legendary')
			.map((f: EnchantStatsType) => f.name)
	);

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
			<Select.Content>
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
			<Select.Content>
				<Select.Label>Common</Select.Label>
				{#each common_rod_enchant_names as rod_enchant_name (rod_enchant_name)}
					<Select.Item class="text-green-400" value={rod_enchant_name}
						>{rod_enchant_name}</Select.Item
					>
				{/each}
				<Select.Label>Uncommon</Select.Label>
				{#each uncommon_rod_enchant_names.filter( (r: string) => rod_enchant_names.includes(r) ) as rod_enchant_name (rod_enchant_name)}
					<Select.Item class="text-blue-400" value={rod_enchant_name}
						>{rod_enchant_name}</Select.Item
					>
				{/each}
				<Select.Label>Rare</Select.Label>
				{#each rare_rod_enchant_names.filter( (r: string) => rod_enchant_names.includes(r) ) as rod_enchant_name (rod_enchant_name)}
					<Select.Item class="text-purple-400" value={rod_enchant_name}
						>{rod_enchant_name}</Select.Item
					>
				{/each}
				<Select.Label>Epic</Select.Label>
				{#each epic_rod_enchant_names.filter( (r: string) => rod_enchant_names.includes(r) ) as rod_enchant_name (rod_enchant_name)}
					<Select.Item class="text-yellow-400" value={rod_enchant_name}
						>{rod_enchant_name}</Select.Item
					>
				{/each}
				<Select.Label>Legendary</Select.Label>
				{#each legendary_rod_enchant_names.filter( (r: string) => rod_enchant_names.includes(r) ) as rod_enchant_name (rod_enchant_name)}
					<Select.Item class="text-red-400" value={rod_enchant_name}>{rod_enchant_name}</Select.Item
					>
				{/each}
			</Select.Content>
		</Select.Root>
	</Card.Content>
</Card.Root>
