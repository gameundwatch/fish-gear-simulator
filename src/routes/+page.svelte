<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import * as Table from '$lib/components/ui/table';
</script>

<main class="w-full max-w-4xl h-screen max-h-128 flex flex-col gap-8 px-4">
	<div class="grid grid-cols-3 gap-4">
		<Card.Root>
			<Card.Header>
				<h2 class="text-xl font-bold">Rod</h2>
			</Card.Header>
			<Card.Content>
				<p>Toy Rod</p>
			</Card.Content>
		</Card.Root>
		<Card.Root>
			<Card.Header>
				<h2 class="text-xl font-bold">Line</h2>
			</Card.Header>
			<Card.Content>
				<p>Diamond Line</p>
			</Card.Content>
		</Card.Root>
		<Card.Root>
			<Card.Header>
				<h2 class="text-xl font-bold">Bobber</h2>
			</Card.Header>
			<Card.Content>
				<p>Basic Bobber</p>
			</Card.Content>
		</Card.Root>
	</div>
	<div>
		<Card.Root>
			<Card.Header>
				<h2 class="text-xl font-bold">Final Stats</h2>
			</Card.Header>
			<Card.Content class="grid grid-cols-2">
				<Table.Root>
					<Table.Body>
						<Table.Row>
							<Table.Cell class="font-semibold">Luck</Table.Cell>
							<Table.Cell class="text-right">000</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="font-semibold">Strength</Table.Cell>
							<Table.Cell class="text-right">0</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="font-semibold">Expertise</Table.Cell>
							<Table.Cell class="text-right">00</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="font-semibold">Attraction Rate</Table.Cell>
							<Table.Cell class="text-right">0</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="font-semibold">Big Catch Rate</Table.Cell>
							<Table.Cell class="text-right">0</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell class="font-semibold">Max Weight</Table.Cell>
							<Table.Cell class="text-right">0000000</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table.Root>
			</Card.Content>
		</Card.Root>
		<div></div>
	</div>
</main>
