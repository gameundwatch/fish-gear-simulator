<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	const { rod, line, bobber } = $props();
	const luck: number = $derived((rod?.luck ?? 0) + (line?.luck ?? 0) + (bobber?.luck ?? 0));
	const strength: number = $derived(
		(rod?.strength ?? 0) + (line?.strength ?? 0) + (bobber?.strength ?? 0)
	);
	const expertise: number = $derived(
		(rod?.expertise ?? 0) + (line?.expertise ?? 0) + (bobber?.expertise ?? 0)
	);
	const attractionRate: number = $derived(
		(rod?.attractionRate ?? 0) + (line?.attractionRate ?? 0) + (bobber?.attractionRate ?? 0)
	);
	const bigCatchRate: number = $derived(
		(rod?.bigCatchRate ?? 0) + (line?.bigCatchRate ?? 0) + (bobber?.bigCatchRate ?? 0)
	);
	const maxWeight: number = $derived(
		(rod?.maxWeight ?? 0) + (line?.maxWeight ?? 0) + (bobber?.maxWeight ?? 0)
	);
</script>

<Table.Root>
	<Table.Header>
		<Table.Row>
			<Table.Cell class="font-semibold">Specs</Table.Cell>
			<Table.Cell class="text-right">🎣</Table.Cell>
			<Table.Cell class="text-right">🧵</Table.Cell>
			<Table.Cell class="text-right">🪀</Table.Cell>
			<Table.Cell class="text-right">Total</Table.Cell>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		<Table.Row class="text-yellow-500">
			<Table.Cell class="font-bold"><span class="text-xl">🍀</span> Luck</Table.Cell>
			<Table.Cell class="text-right">{rod?.luck ?? 0}</Table.Cell>
			<Table.Cell class="text-right">{line?.luck ?? 0}</Table.Cell>
			<Table.Cell class="text-right">{bobber?.luck ?? 0}</Table.Cell>
			<Table.Cell class="text-right font-semibold">{luck}</Table.Cell>
		</Table.Row>
		<Table.Row class="text-red-500">
			<Table.Cell class="font-bold"><span class="text-xl">💪</span> Strength</Table.Cell>
			<Table.Cell class="text-right">{rod?.strength ?? 0}</Table.Cell>
			<Table.Cell class="text-right">{line?.strength ?? 0}</Table.Cell>
			<Table.Cell class="text-right">{bobber?.strength ?? 0}</Table.Cell>
			<Table.Cell class="text-right font-semibold">{strength}</Table.Cell>
		</Table.Row>
		<Table.Row class="text-cyan-500">
			<Table.Cell class="font-bold"><span class="text-xl">🎓</span> Expertise</Table.Cell>
			<Table.Cell class="text-right">{rod?.expertise ?? 0}</Table.Cell>
			<Table.Cell class="text-right">{line?.expertise ?? 0}</Table.Cell>
			<Table.Cell class="text-right">{bobber?.expertise ?? 0}</Table.Cell>
			<Table.Cell class="text-right font-semibold">{expertise}</Table.Cell>
		</Table.Row>
		<Table.Row class="text-green-500">
			<Table.Cell class="font-bold"><span class="text-xl">🐡</span> Attraction Rate</Table.Cell>
			<Table.Cell class="text-right">{rod?.attractionRate ?? 0}</Table.Cell>
			<Table.Cell class="text-right">{line?.attractionRate ?? 0}</Table.Cell>
			<Table.Cell class="text-right">{bobber?.attractionRate ?? 0}</Table.Cell>
			<Table.Cell class="text-right font-semibold">{attractionRate}</Table.Cell>
		</Table.Row>
		<Table.Row class="text-orange-500">
			<Table.Cell class="font-bold"><span class="text-xl">🦈</span> Big Catch Rate</Table.Cell>
			<Table.Cell class="text-right">{rod?.bigCatchRate ?? 0}</Table.Cell>
			<Table.Cell class="text-right">{line?.bigCatchRate ?? 0}</Table.Cell>
			<Table.Cell class="text-right">{bobber?.bigCatchRate ?? 0}</Table.Cell>
			<Table.Cell class="text-right font-semibold">{bigCatchRate}</Table.Cell>
		</Table.Row>
		<Table.Row class="text-purple-500">
			<Table.Cell class="font-bold"><span class="text-xl">⚖️</span> Max Weight</Table.Cell>
			<Table.Cell class="text-right">{(rod?.maxWeight ?? 0).toLocaleString()}</Table.Cell>
			<Table.Cell class="text-right">{(line?.maxWeight ?? 0).toLocaleString()}</Table.Cell>
			<Table.Cell class="text-right">{(bobber?.maxWeight ?? 0).toLocaleString()}</Table.Cell>
			<Table.Cell class="text-right font-semibold">{maxWeight.toLocaleString()}</Table.Cell>
		</Table.Row>
	</Table.Body>
</Table.Root>
