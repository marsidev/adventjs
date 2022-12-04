export function fitsInOneBox(boxes) {
	return boxes
		.sort((a, b) => a.l - b.l)
		.every((box, i) => {
			if (i === boxes.length - 1) return true
			const next = boxes[i + 1]
			const nextBoxFits = box.l < next.l && box.w < next.w && box.h < next.h
			return nextBoxFits
		})
}
