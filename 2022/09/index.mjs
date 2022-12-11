export function countTime(leds) {
	return leds.reduce(acc => {
		const hasZeros = leds.includes(0)
		leds = leds.map((led, idx) => +leds.at(idx - 1) || led)
		return acc + +hasZeros * 7
	}, 0)
}

// score: 160
