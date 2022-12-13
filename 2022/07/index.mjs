export function getGiftsToRefill(a1, a2, a3) {
	const allGifts = [...a1, ...a2, ...a3]
	return [...new Set(allGifts)].filter(g => a1.includes(g) + a2.includes(g) + a3.includes(g) === 1)
}

// score: 200
