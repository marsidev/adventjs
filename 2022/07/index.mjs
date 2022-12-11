export function getGiftsToRefill(a1, a2, a3) {
	return [
		...new Set([
			...a1.filter(g => [...a2, ...a3].indexOf(g) === -1),
			...a2.filter(g => [...a1, ...a3].indexOf(g) === -1),
			...a3.filter(g => [...a1, ...a2].indexOf(g) === -1)
		])
	]
}

// score: 200
