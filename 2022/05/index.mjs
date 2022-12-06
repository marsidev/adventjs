export function getMaxGifts(giftsCities, maxGifts, maxCities) {
	let recursiveCount = 0

	const isPartialSum = (arr, toFind, startFrom = 0) => {
		if (toFind === 0) return true
		const n = arr.length

		if (startFrom === n) {
			if (arr[arr.length - 1] === toFind) return true
			else return false
		} else if (startFrom < n) {
			if (isPartialSum(arr, toFind - arr[startFrom], startFrom + 1)) {
				recursiveCount++
				return true
			} else if (isPartialSum(arr, toFind, startFrom + 1)) {
				return true
			}

			return false
		}

		return false
	}

	if (maxCities === 0) return 0
	if (giftsCities.includes(maxGifts)) return maxGifts
	if (giftsCities.every(gc => gc > maxGifts)) return 0

	giftsCities = giftsCities.filter(item => item <= maxGifts).sort((a, b) => b - a)

	if (giftsCities.length === 1 || maxCities === 1) return giftsCities[0]

	if (giftsCities.length <= maxCities) {
		const sum = giftsCities.reduce((pv, cv) => pv + cv, 0)
		if (sum <= maxGifts) return sum
	}

	for (let i = maxGifts; i >= 0; i--) {
		recursiveCount = 0
		if (isPartialSum(giftsCities, i) && recursiveCount <= maxCities) {
			return i
		}
	}

	return giftsCities[0]
}
