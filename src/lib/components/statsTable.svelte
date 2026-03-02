<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	const { luck, strength, expertise, attractionRate, bigCatchRate, maxWeight } = $props();
</script>

<Table.Root>
	<Table.Body>
		<Table.Row class="text-yellow-500">
			<Table.Cell class="font-semibold"><span class="text-xl">🍀</span> Luck</Table.Cell>
			<Table.Cell class="text-right">{luck}</Table.Cell>
		</Table.Row>
		<Table.Row class="text-red-500">
			<Table.Cell class="font-semibold"><span class="text-xl">💪</span> Strength</Table.Cell>
			<Table.Cell class="text-right">{strength}</Table.Cell>
		</Table.Row>
		<Table.Row class="text-cyan-500">
			<Table.Cell class="font-semibold"><span class="text-xl">🎓</span> Expertise</Table.Cell>
			<Table.Cell class="text-right">{expertise}</Table.Cell>
		</Table.Row>
		<Table.Row class="text-green-500">
			<Table.Cell class="font-semibold"><span class="text-xl">🐡</span> Attraction Rate</Table.Cell>
			<Table.Cell class="text-right">{Math.min(attractionRate, 100)}</Table.Cell>
		</Table.Row>
		<Table.Row class="text-orange-500">
			<Table.Cell class="font-semibold"><span class="text-xl">🦈</span> Big Catch Rate</Table.Cell>
			<Table.Cell class="text-right">{bigCatchRate}</Table.Cell>
		</Table.Row>
		<Table.Row class="text-purple-500">
			<Table.Cell class="font-semibold"><span class="text-xl">⚖️</span> Max Weight</Table.Cell>
			<Table.Cell class="text-right">{maxWeight.toLocaleString()}</Table.Cell>
		</Table.Row>
	</Table.Body>
</Table.Root>
