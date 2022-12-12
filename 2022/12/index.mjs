export function selectSleigh(distance, sleighs) {
	return [{ name: null }, ...sleighs.filter(s => s.consumption * distance <= 20)].at(-1).name
}

// score: 300|400
