export function checkJump(heights) {
	const peak = Math.max(...heights)
	const peakIndex = heights.indexOf(peak)

	const before = heights.slice(0, peakIndex)
	const after = heights.slice(peakIndex + 1, heights.length)

	const hasAscending = before.length > 0
	const hasDescending = after.length > 0

	const ascendingSorted = before.slice(1).every((h, i) => h >= before[i])
	const descendingSorted = after.slice(1).every((h, i) => h <= after[i])

	return hasAscending && hasDescending && ascendingSorted && descendingSorted
}
