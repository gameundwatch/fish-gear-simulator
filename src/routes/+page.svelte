<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import * as Select from '$lib/components/ui/select';

	import RODS_JSON from '../assets/data/rods.json';
	import LINES_JSON from '../assets/data/lines.json';
	import BOBBERS_JSON from '../assets/data/bobbers.json';
	import ROD_ENCHANTS_JSON from '../assets/data/rod_enchants.json';

	import StatsTable from '$lib/components/statsTable.svelte';
	import RodCard from '$lib/components/rodCard.svelte';
	import LineCard from '$lib/components/lineCard.svelte';
	import BobberCard from '$lib/components/bobberCard.svelte';

	const parseGear = (raw: GearStatsJsonType[]): GearStatsType[] =>
		raw.map((r) => ({
			name: r.name,
			luck: Number(r.luck),
			strength: Number(r.strength),
			expertise: Number(r.expertise),
			attractionRate: Number(r.attraction_rate),
			bigCatchRate: Number(r.big_catch_rate),
			maxWeight: Number(r.max_weight),
		}));

	const parseEnchants = (raw: EnchantStatsJsonType[]): EnchantStatsType[] =>
		raw.map((r) => ({
			name: r.name,
			grade: r.grade,
			other: r.other,
			luck: Number(r.luck),
			strength: Number(r.strength),
			expertise: Number(r.expertise),
			attractionRate: Number(r.attraction_rate),
			bigCatchRate: Number(r.big_catch_rate),
			maxWeight: Number(r.max_weight),
		}));

	const rods = parseGear(RODS_JSON);
	const rod_enchants = parseEnchants(ROD_ENCHANTS_JSON);
	const lines = parseGear(LINES_JSON);
	const bobbers = parseGear(BOBBERS_JSON);

	let selected_rod: string = $state('');
	let selected_rod_enchant: string = $state('');
	let selected_line: string = $state('');
	let selected_bobber: string = $state('');

	const rod = $derived(rods.find((r) => r.name === selected_rod));
	const rod_enchant = $derived(rod_enchants.find((r) => r.name === selected_rod_enchant));
	const line = $derived(lines.find((l) => l.name === selected_line));
	const bobber = $derived(bobbers.find((b) => b.name === selected_bobber));
</script>

<main class="w-full max-w-4xl h-screen max-h-128 px-4">
	<h1 class="my-2 text-2xl font-bold">FISH! Gear Stats Simulator</h1>
	<div class="grid grid-cols-[1fr_2fr] gap-8">
		<div class="grid grid-cols-1 gap-4">
			<RodCard
				rod_names={rods.map((f) => f.name)}
				bind:selected_rod
				rod_enchant_names={rod_enchants.map((f) => f.name)}
				bind:selected_rod_enchant
			/>
			<LineCard line_names={lines.map((l) => l.name)} bind:selected_line />
			<BobberCard bobber_names={bobbers.map((b) => b.name)} bind:selected_bobber />
		</div>
		<div class="h-full">
			<Card.Root>
				<Card.Header>
					<h2 class="text-xl font-bold">Final Stats</h2>
				</Card.Header>
				<Card.Content class="grid grid-cols-1">
					<StatsTable {rod} {rod_enchant} {line} {bobber} />
				</Card.Content>
			</Card.Root>
		</div>
	</div>
</main>
