export default function daysToXmas(date) {
  const xmas = new Date('Dec 25, 2021')
  const dif = xmas.getTime() - date.getTime() // time difference on ms
  return Math.ceil(dif / 1000 / 3600 / 24)
}
