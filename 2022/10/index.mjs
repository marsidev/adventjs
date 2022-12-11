export function checkJump(heights) {
	const peakIndex = heights.indexOf(Math.max(...heights))

	const before = heights.slice(0, peakIndex)
	const after = heights.slice(peakIndex + 1)

	const ascending = before.slice(1).every((h, i) => h >= before[i])
	const descending = after.slice(1).every((h, i) => h <= after[i])

	return before.length > 0 && after.length > 0 && ascending && descending
}

// score: 260
