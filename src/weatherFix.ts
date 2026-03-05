export const weatherFix = (time: Time, weather: Weather, enchant?: EnchantStatsType): StatsType => {
	if (!enchant)
		return { luck: 0, strength: 0, expertise: 0, attractionRate: 0, bigCatchRate: 0, maxWeight: 0 };

	let fixed: StatsType = { ...enchant };
	switch (time) {
		case 'day':
			fixed = {
				luck: fixed.luck + (enchant.day?.luck ?? 0),
				strength: fixed.strength + (enchant.day?.strength ?? 0),
				expertise: fixed.expertise + (enchant.day?.expertise ?? 0),
				attractionRate: fixed.attractionRate + (enchant.day?.attractionRate ?? 0),
				bigCatchRate: fixed.bigCatchRate + (enchant.day?.bigCatchRate ?? 0),
				maxWeight: fixed.maxWeight + (enchant.day?.maxWeight ?? 0),
			};
			break;
		case 'night':
			fixed = {
				luck: fixed.luck + (enchant.night?.luck ?? 0),
				strength: fixed.strength + (enchant.night?.strength ?? 0),
				expertise: fixed.expertise + (enchant.night?.expertise ?? 0),
				attractionRate: fixed.attractionRate + (enchant.night?.attractionRate ?? 0),
				bigCatchRate: fixed.bigCatchRate + (enchant.night?.bigCatchRate ?? 0),
				maxWeight: fixed.maxWeight + (enchant.night?.maxWeight ?? 0),
			};
			break;
	}

	switch (weather) {
		case 'clear':
			fixed = {
				luck: fixed.luck,
				strength: fixed.strength,
				expertise: fixed.expertise,
				attractionRate: fixed.attractionRate,
				bigCatchRate: fixed.bigCatchRate,
				maxWeight: fixed.maxWeight,
			};
			break;
		case 'rainy':
			fixed = {
				luck: fixed.luck + (enchant.rainy?.luck ?? 0),
				strength: fixed.strength + (enchant.rainy?.strength ?? 0),
				expertise: fixed.expertise + (enchant.rainy?.expertise ?? 0),
				attractionRate: fixed.attractionRate + (enchant.rainy?.attractionRate ?? 0),
				bigCatchRate: fixed.bigCatchRate + (enchant.rainy?.bigCatchRate ?? 0),
				maxWeight: fixed.maxWeight + (enchant.rainy?.maxWeight ?? 0),
			};
			break;
		case 'foggy':
			fixed = {
				luck: fixed.luck + (enchant.foggy?.luck ?? 0),
				strength: fixed.strength + (enchant.foggy?.strength ?? 0),
				expertise: fixed.expertise + (enchant.foggy?.expertise ?? 0),
				attractionRate: fixed.attractionRate + (enchant.foggy?.attractionRate ?? 0),
				bigCatchRate: fixed.bigCatchRate + (enchant.foggy?.bigCatchRate ?? 0),
				maxWeight: fixed.maxWeight + (enchant.foggy?.maxWeight ?? 0),
			};
			break;
	}
	return fixed;
};
