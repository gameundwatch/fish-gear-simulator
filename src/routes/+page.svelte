<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import * as Select from '$lib/components/ui/select';

	import RODS_JSON from '../assets/data/rods.json';
	import LINES_JSON from '../assets/data/lines.json';
	import BOBBERS_JSON from '../assets/data/bobbers.json';

	import StatsTable from '$lib/components/statsTable.svelte';
	import RodCard from '$lib/components/rodCard.svelte';
	import LineCard from '$lib/components/lineCard.svelte';
	import BobberCard from '$lib/components/bobberCard.svelte';

	const parse = (raw: typeof RODS_JSON) =>
		raw.map((r) => ({
			name: r.name,
			luck: Number(r.luck),
			strength: Number(r.strength),
			expertise: Number(r.expertise),
			attractionRate: Number(r.attraction_rate),
			bigCatchRate: Number(r.big_catch_rate),
			maxWeight: Number(r.max_weight),
		}));

	const rods = parse(RODS_JSON);
	const lines = parse(LINES_JSON);
	const bobbers = parse(BOBBERS_JSON);

	let selected_rod: string = $state('');
	let selected_line: string = $state('');
	let selected_bobber: string = $state('');

	const rod = $derived(rods.find((r) => r.name === selected_rod));
	const line = $derived(lines.find((l) => l.name === selected_line));
	const bobber = $derived(bobbers.find((b) => b.name === selected_bobber));

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

<main class="w-full max-w-4xl h-screen max-h-128 px-4">
	<h1 class="my-2 text-2xl font-bold">FISH! Gear Stats Simulator</h1>
	<div class="grid grid-cols-[1fr_2fr] gap-8">
		<div class="grid grid-cols-1 gap-4">
			<RodCard rod_names={rods.map((f) => f.name)} bind:selected_rod />
			<LineCard line_names={lines.map((l) => l.name)} bind:selected_line />
			<BobberCard bobber_names={bobbers.map((b) => b.name)} bind:selected_bobber />
		</div>
		<div>
			<Card.Root>
				<Card.Header>
					<h2 class="text-xl font-bold">Final Stats</h2>
				</Card.Header>
				<Card.Content class="grid grid-cols-1">
					<StatsTable {luck} {strength} {expertise} {attractionRate} {bigCatchRate} {maxWeight} />
				</Card.Content>
			</Card.Root>
		</div>
	</div>
</main>
