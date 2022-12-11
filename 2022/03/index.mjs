export function distributeGifts(packOfGifts, reindeers) {
	return Math.floor((reindeers.join('').length * 2) / packOfGifts.join('').length)
}

// score: 164
