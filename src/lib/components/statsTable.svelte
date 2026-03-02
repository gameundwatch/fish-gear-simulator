<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	const { luck, strength, expertise, attractionRate, bigCatchRate, maxWeight } = $props();
</script>

<Table.Root>
	<Table.Body>
		<Table.Row>
			<Table.Cell class="font-semibold">Luck</Table.Cell>
			<Table.Cell class="text-right">{luck}</Table.Cell>
		</Table.Row>
		<Table.Row>
			<Table.Cell class="font-semibold">Strength</Table.Cell>
			<Table.Cell class="text-right">{strength}</Table.Cell>
		</Table.Row>
		<Table.Row>
			<Table.Cell class="font-semibold">Expertise</Table.Cell>
			<Table.Cell class="text-right">{expertise}</Table.Cell>
		</Table.Row>
		<Table.Row>
			<Table.Cell class="font-semibold">Attraction Rate</Table.Cell>
			<Table.Cell class="text-right">{Math.min(attractionRate, 100)}</Table.Cell>
		</Table.Row>
		<Table.Row>
			<Table.Cell class="font-semibold">Big Catch Rate</Table.Cell>
			<Table.Cell class="text-right">{bigCatchRate}</Table.Cell>
		</Table.Row>
		<Table.Row>
			<Table.Cell class="font-semibold">Max Weight</Table.Cell>
			<Table.Cell class="text-right">{maxWeight.toLocaleString()}</Table.Cell>
		</Table.Row>
	</Table.Body>
</Table.Root>
