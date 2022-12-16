export function decorateTree(base) {
	const baseArr = base.split(' ')

	const decorators = {
		PP: 'P',
		BB: 'B',
		RR: 'R',
		BP: 'R',
		PB: 'R',
		RP: 'B',
		PR: 'B',
		BR: 'P',
		RB: 'P'
	}

	return baseArr
		.slice(1)
		.reduce(
			(acc, _, i) => {
				const prevRow = acc[i]
				const currRow = prevRow.slice(1).map((_, k) => decorators[prevRow[k] + prevRow[k + 1]])

				return [...acc, currRow]
			},
			[baseArr]
		)
		.reverse()
		.map(v => v.join(' '))
}
