export default function canCarry(capacity, trip) {
  const route = {}; let min = Infinity; let max = 0
  trip.forEach(t => {
    min = Math.min(t[1], t[2]) < min ? Math.min(t[1], t[2]) : min
    max = Math.max(t[1], t[2]) > max ? Math.max(t[1], t[2]) : max
    route[t[1]] = { ...route[t[1]], pick: t[0] }
    route[t[2]] = { ...route[t[2]], deliver: t[0] }
    if (!route[t[1]].deliver) route[t[1]].deliver = 0
    if (!route[t[2]].pick) route[t[2]].pick = 0
  })

  let current = 0
  for (let i = min; i <= max; i++) {
    if (route[i]) {
      if (route[i].deliver) current -= route[i].deliver
      if (route[i].pick) current += route[i].pick
    }
    if (current > capacity) return false
  }
  return true
}
