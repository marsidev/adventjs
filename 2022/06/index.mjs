export function createCube(size) {
	let cube = ''

	Array.from({ length: size }).forEach((_, i) => {
		const top = ' '.repeat(i) + '/\\'.repeat(size - i) + '_\\'.repeat(size) + '\n'
		const bottom = ' '.repeat(i) + '\\/'.repeat(size - i) + '_/'.repeat(size) + '\n'
		cube = `${top}${cube}${bottom}`
	})

	return cube.trimEnd()
}

// score: 200
