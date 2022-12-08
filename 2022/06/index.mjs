export function createCube(size) {
	if (size === 0) return ''

	const isEven = n => n % 2 === 0

	const MAX_ROWS = size * 2
	const MAX_COLS = size * 4
	const MID_ROWS = MAX_ROWS / 2
	const MID_COLS = MAX_COLS / 2
	const BLANK = ' '

	const cubeArr = Array.from(Array(MAX_ROWS), () => Array(MAX_ROWS))

	for (let row = 0; row < MAX_ROWS; row++) {
		const isFirstMidRows = row <= MID_ROWS - 1

		for (let col = 0; col < MAX_COLS; col++) {
			const isFirstMidCols = col <= MID_COLS - 1

			if (isFirstMidCols) {
				if (isFirstMidRows) {
					cubeArr[row][col] = isEven(col) ? '/' : '\\'
				} else {
					cubeArr[row][col] = isEven(col) ? '\\' : '/'
				}
			} else {
				if (isFirstMidRows) {
					cubeArr[row][col] = isEven(col) ? '_' : '\\'
				} else {
					cubeArr[row][col] = isEven(col) ? '_' : '/'
				}
			}
		}
	}

	for (let row = 0; row < MAX_ROWS; row++) {
		const isFirstMidRows = row <= MID_ROWS - 1
		const rowsDiff = isFirstMidRows ? row - (size - 1) : size - row
		const k = -rowsDiff

		if (k) {
			const newRow = [...new Array(k).fill(BLANK), ...cubeArr[row].slice(-cubeArr[row].length + k * 2)]
			cubeArr[row] = newRow
		}
		if (row < MAX_ROWS - 1) cubeArr[row][cubeArr[row].length - 1] += '\n'
	}

	return cubeArr.join().replaceAll(',', '')
}
