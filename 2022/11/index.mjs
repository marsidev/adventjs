export function getCompleted(part, total) {
	const _p = part.split(':')
	const partSeconds = _p[0] * 3600 + _p[1] * 60 + +_p[2]

	const _t = total.split(':')
	const totalSeconds = _t[0] * 3600 + _t[1] * 60 + +_t[2]

	let gcd = partSeconds // greatest common divisor
	let den = totalSeconds
	let res = 0

	while (den) {
		res = gcd % den
		gcd = den
		den = res
	}

	return `${partSeconds / gcd}/${totalSeconds / gcd}`
}

// score: 360
