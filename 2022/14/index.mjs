export function getOptimalPath(path) {
	return Math.min(
		...Array.from({ length: path.length - 1 })
			// get all possible paths (subsets)
			.reduce(
				(acc, _, k) => {
					const times = path[k + 1]
					const newSubPaths = []
					let q = 0

					times.forEach((_, i) => {
						acc.forEach(p => {
							newSubPaths[q] = [...p, times[i]]
							q++
						})
					})

					return newSubPaths
				},
				[path[0]]
			)
			// remove those which have not direct connections
			.filter(p => {
				const ids = p.map((t, k) => path[k].indexOf(t))
				return ids.slice(1).every((n, i) => n - ids[i] <= 1)
			})
			// filter those which have expected ascendant order
			.filter(p => {
				const ids = p.map((t, k) => path[k].indexOf(t))

				const brokenIdx = ids.slice(1).findIndex((v, i) => v < ids[i]) + 1
				return p.slice(brokenIdx).some((_, i) => p[i] >= p[brokenIdx])
			})
			// get sums
			.map(path => path.reduce((total, time) => total + time, 0))
	)
}

// score: 100
// a cleaner solution can be found at https://github.com/Achalogy/advent-js-2022/tree/main/retos/reto-14
