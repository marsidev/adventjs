export default function missingReindeer(ids) {
	for (let i = 0; i < ids.length + 1; i++) if (ids.indexOf(i) === -1) return i
	return -1
}
