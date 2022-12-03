export default function wrapGifts(gifts) {
	if (gifts.length === 0) return []
	const box = []
	let borders = '*'
	for (let i = 0; i < gifts[0].length; i++) borders += '*'
	borders += '*'
	box.push(borders)
	for (let i = 0; i < gifts.length; i++) box.push(`*${gifts[i]}*`)
	box.push(borders)
	return box
}
