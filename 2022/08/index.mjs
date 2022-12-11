export function checkPart(part) {
	return [...part].some((_, i, arr) => {
		const tempPart = [...arr.slice(0, i), ...arr.slice(i + 1)]
		return tempPart.join('') === tempPart.reverse().join('')
	})
}

// score: 200
