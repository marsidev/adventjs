export function countHours(year, holidays) {
	return (
		holidays.filter(holiday => {
			const day = new Date(`${year}/${holiday}`).getDay()
			return +/^[1-5]/.test(day)
		}).length * 2
	)
}

// score: 121
