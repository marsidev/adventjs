export function countTime(leds) {
	let changes = 0

	leds.some(() => {
		const hasZeros = leds.includes(0)
		changes += +hasZeros
		leds = leds.map((led, idx) => +leds.at(idx - 1) || led)
		return !hasZeros
	})

	return changes * 7
}
