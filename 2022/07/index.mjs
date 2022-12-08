export function getGiftsToRefill(a1, a2, a3) {
	const giftsToRefill = []
	giftsToRefill.push(...a1.filter(g => !a2.includes(g) && !a3.includes(g)))
	giftsToRefill.push(...a2.filter(g => !a1.includes(g) && !a3.includes(g)))
	giftsToRefill.push(...a3.filter(g => !a1.includes(g) && !a2.includes(g)))
	return [...new Set(giftsToRefill)]
}
