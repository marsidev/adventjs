export default function learn(time, courses) {
	let refTime = time; let result = null
	while (refTime > 0 && result === null) {
		for (let i = 0; i < courses.length; i++) {
			const pos = courses.indexOf(refTime - courses[i])
			if (pos > -1 & pos !== i && result === null) result = [i, pos]
		}
		refTime--
	}
	return result ? result.sort((a, b) => a - b) : null
}
