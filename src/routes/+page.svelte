<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import * as Select from '$lib/components/ui/select';
	import * as ToggleGroup from '$lib/components/ui/toggle-group';
	import { CloudFog, CloudRain, CloudSun, MoonStar, Sun } from '@lucide/svelte';

	import RODS_JSON from '../assets/data/rods.json';
	import LINES_JSON from '../assets/data/lines.json';
	import BOBBERS_JSON from '../assets/data/bobbers.json';
	import ROD_ENCHANTS_JSON from '../assets/data/rod_enchants.json';

	import StatsTable from '$lib/components/statsTable.svelte';
	import RodCard from '$lib/components/rodCard.svelte';
	import LineCard from '$lib/components/lineCard.svelte';
	import BobberCard from '$lib/components/bobberCard.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';

	const parseStats = (raw?: StatsJsonType): StatsType | undefined => {
		if (!raw) return undefined;
		return {
			luck: Number(raw.luck),
			strength: Number(raw.strength),
			expertise: Number(raw.expertise),
			attractionRate: Number(raw.attraction_rate),
			bigCatchRate: Number(raw.big_catch_rate),
			maxWeight: Number(raw.max_weight),
		};
	};

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
			day: parseStats(r.day),
			night: parseStats(r.night),
			rainy: parseStats(r.rainy),
			foggy: parseStats(r.foggy),
		}));

	const rods = parseGear(RODS_JSON);
	const rod_enchants = parseEnchants(ROD_ENCHANTS_JSON);
	const lines = parseGear(LINES_JSON);
	const bobbers = parseGear(BOBBERS_JSON);

	let selected_rod: string = $state('Stick and String');
	let selected_rod_enchant: string = $state('');
	let selected_line: string = $state('Basic Line');
	let selected_bobber: string = $state('Basic Bobber');
	let weather: Weather = $state('clear');
	let time: Time = $state('day');

	const rod = $derived(rods.find((r) => r.name === selected_rod));
	const rod_enchant = $derived(rod_enchants.find((r) => r.name === selected_rod_enchant));
	const line = $derived(lines.find((l) => l.name === selected_line));
	const bobber = $derived(bobbers.find((b) => b.name === selected_bobber));
</script>

<main class="w-full max-w-4xl h-screen max-h-128 px-4">
	<div class="w-full grid grid-cols-[1fr_auto_auto] gap-2">
		<h1 class="my-2 text-2xl font-bold">FISH! Gear Stats Simulator</h1>
		<ToggleGroup.Root variant="outline" type="single" bind:value={time}>
			<ToggleGroup.Item value="day" aria-label="Day"><CloudSun /></ToggleGroup.Item>
			<ToggleGroup.Item value="night" aria-label="Night"><MoonStar /></ToggleGroup.Item>
		</ToggleGroup.Root>
		<ToggleGroup.Root variant="outline" type="single" bind:value={weather}>
			<ToggleGroup.Item value="clear" aria-label="Clear"><Sun /></ToggleGroup.Item>
			<ToggleGroup.Item value="rainy" aria-label="Rainy"><CloudRain /></ToggleGroup.Item>
			<ToggleGroup.Item value="foggy" aria-label="Foggy"><CloudFog /></ToggleGroup.Item>
		</ToggleGroup.Root>
	</div>
	<div class="grid grid-cols-[1fr_2fr] gap-8">
		<div class="grid grid-cols-1 gap-4">
			<RodCard {rods} {rod_enchants} bind:selected_rod bind:selected_rod_enchant />
			<LineCard {lines} bind:selected_line />
			<BobberCard {bobbers} bind:selected_bobber />
		</div>
		<Card.Root>
			<Card.Header>
				<h2 class="text-xl font-bold">Final Stats</h2>
			</Card.Header>
			<Card.Content class="grid grid-rows-[auto_1fr] gap-4">
				<StatsTable {rod} {rod_enchant} {line} {bobber} {time} {weather} />
				{#if rod_enchant?.other}
					<Badge class="bg-purple-700 text-white text-xs">
						<p>{rod_enchant?.other}</p>
					</Badge>
				{/if}
			</Card.Content>
		</Card.Root>
	</div>
</main>
