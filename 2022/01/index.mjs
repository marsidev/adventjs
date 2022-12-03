const paper = '************************************'

export function wrapping (gifts) {
	return gifts.map(g => {
		const wrapper = paper.slice(0, g.length + 2)
		return `${wrapper}\n*${g}*\n${wrapper}`
	})
}
