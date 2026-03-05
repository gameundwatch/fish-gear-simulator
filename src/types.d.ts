type Time = 'day' | 'night';
type Weather = 'clear' | 'rainy' | 'foggy';

type StatsType = {
	luck: number;
	strength: number;
	expertise: number;
	attractionRate: number;
	bigCatchRate: number;
	maxWeight: number;
};

type GearStatsType = StatsType & {
	name: string;
};

type EnchantStatsType = StatsType & {
	name: string;
	grade: string;
	other: string;
	day?: StatsType;
	night?: StatsType;
	rainy?: StatsType;
	foggy?: StatsType;
};

// json types
type StatsJsonType = {
	luck: string;
	strength: string;
	expertise: string;
	attraction_rate: string;
	big_catch_rate: string;
	max_weight: string;
};

type GearStatsJsonType = StatsJsonType & {
	name: string;
	get_in: string;
	price: string;
};

type EnchantStatsJsonType = StatsJsonType & {
	name: string;
	grade: string;
	other: string;
	day?: StatsJsonType;
	night?: StatsJsonType;
	rainy?: StatsJsonType;
	foggy?: StatsJsonType;
};
