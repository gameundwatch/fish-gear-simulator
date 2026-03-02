<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import * as Select from '$lib/components/ui/select';

	import RODS_JSON from '../assets/data/rods.json';
	import LINES_JSON from '../assets/data/lines.json';
	import BOBBERS_JSON from '../assets/data/bobbers.json';

	import StatsTable from '$lib/components/statsTable.svelte';

	const rods = RODS_JSON;
	const lines = LINES_JSON;
	const bobbers = BOBBERS_JSON;

	let selected_rod: string = $state('');
	let selected_line: string = $state('');
	let selected_bobber: string = $state('');

	const rodTriggerContent = $derived(
		rods.find((r) => r.name === selected_rod)?.name ?? 'select a rod'
	);
	const lineTriggerContent = $derived(
		lines.find((l) => l.name === selected_line)?.name ?? 'select a line'
	);
	const bobberTriggerContent = $derived(
		bobbers.find((b) => b.name === selected_bobber)?.name ?? 'select a bobber'
	);
</script>

<main class="w-full max-w-4xl h-screen max-h-128 flex flex-col gap-8 px-4">
	<div class="grid grid-cols-3 gap-4">
		<Card.Root>
			<Card.Header>
				<h2 class="text-xl font-bold">Rod</h2>
			</Card.Header>
			<Card.Content>
				<Select.Root type="single" bind:value={selected_rod}>
					<Select.Trigger>
						{rodTriggerContent}
					</Select.Trigger>
					<Select.Content>
						{#each rods as rod (rod.name)}
							<Select.Item value={rod.name}>{rod.name}</Select.Item>
						{/each}
					</Select.Content>
				</Select.Root>
			</Card.Content>
		</Card.Root>
		<Card.Root>
			<Card.Header>
				<h2 class="text-xl font-bold">Line</h2>
			</Card.Header>
			<Card.Content>
				<Select.Root type="single" bind:value={selected_line}>
					<Select.Trigger>
						{lineTriggerContent}
					</Select.Trigger>
					<Select.Content>
						{#each lines as line (line.name)}
							<Select.Item value={line.name}>{line.name}</Select.Item>
						{/each}
					</Select.Content>
				</Select.Root>
			</Card.Content>
		</Card.Root>
		<Card.Root>
			<Card.Header>
				<h2 class="text-xl font-bold">Bobber</h2>
			</Card.Header>
			<Card.Content>
				<Select.Root type="single" bind:value={selected_bobber}>
					<Select.Trigger>
						{bobberTriggerContent}
					</Select.Trigger>
					<Select.Content>
						{#each bobbers as bobber (bobber.name)}
							<Select.Item value={bobber.name}>{bobber.name}</Select.Item>
						{/each}
					</Select.Content>
				</Select.Root>
			</Card.Content>
		</Card.Root>
	</div>
	<div>
		<Card.Root>
			<Card.Header>
				<h2 class="text-xl font-bold">Final Stats</h2>
			</Card.Header>
			<Card.Content class="grid grid-cols-2">
				<StatsTable />
			</Card.Content>
		</Card.Root>
		<div></div>
	</div>
</main>
