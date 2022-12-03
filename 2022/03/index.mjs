export function distributeGifts(packOfGifts, reindeers) {
	const reindeersMaxWeight = reindeers.join('').length * 2
	const giftsWeight = packOfGifts.join('').length
	const deliveries = Math.floor(reindeersMaxWeight / giftsWeight)
	return deliveries
}
