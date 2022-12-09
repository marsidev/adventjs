export function checkPart(part) {
	return [...part].some((_, i, arr) => {
		const tempPart = [...arr.slice(0, i), ...arr.slice(i + 1, arr.length)]
		return tempPart.join('') === tempPart.reverse().join('')
	})
}
