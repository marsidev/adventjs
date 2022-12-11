export function wrapping(gifts) {
	return gifts.map(g => {
		const w = '*'.repeat(2 + g.length)
		return `${w}\n*${g}*\n${w}`
	})
}

// score: 131
