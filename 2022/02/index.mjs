export function countHours (year, holidays) {
	const validHolidays = holidays.filter(holiday => {
		const dayIndex = new Date(`${year}/${holiday}`).getDay()
		return dayIndex !== 6 && dayIndex !== 0
	})

	const extraHours = validHolidays.length * 2
	return extraHours
}
