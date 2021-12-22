export default function sumPairs(numbers, result) {
  let pairs = null; let pos
  numbers.find((n, i) => {
    pos = numbers.indexOf(result - n) // index of a number X where `result = P + n`
    if (pos > -1 && pos !== i) return (pairs = [n, result - n])
    return null
  })
  return pairs
}
