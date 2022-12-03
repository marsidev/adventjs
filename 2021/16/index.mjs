export default function decodeNumber(symbols) {
	const doc = { '.': 1, ',': 5, ':': 10, ';': 50, '!': 100 }

	let chrValue; let chrNextValue; let result = 0
	for (let i = 0; i < symbols.length; i++) {
		chrValue = doc[symbols.substring(i, i + 1)]
		if (!chrValue) return NaN

		if (i < symbols.length - 1) {
			chrNextValue = doc[symbols.substring(i + 1, i + 2)]
			if (chrValue >= chrNextValue) result += chrValue
			else if (chrValue < chrNextValue) result -= chrValue
		} else result += chrValue
	}

	return result
}
