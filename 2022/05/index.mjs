export function getMaxGifts(giftsCities, maxGifts, maxCities) {
	return Math.max(
		...giftsCities
			.reduce((acc, item) => acc.concat(acc.map(x => [...x, item])), [[]])
			.filter(x => x.length <= maxCities)
			.map(a => a.reduce((sum, val) => sum + val, 0))
			.filter(x => x <= maxGifts)
	)
}

// score: 170
