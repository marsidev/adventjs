export default function getCoins(change) {
  const coins = [50, 20, 10, 5, 2, 1]
  const emptyResult = [0, 0, 0, 0, 0, 0]; let result; let tempChange = change; let solved = false; let j

  coins.forEach((c0, i) => {
    result = emptyResult
    if (c0 === change) {
      result[i]++
      solved = true
    }

    if (c0 < tempChange && !solved) {
      j = 0
      while (tempChange > 0 && !solved) {
        result[i]++
        tempChange -= c0
        coins.forEach((c1, j) => {
          if (c1 <= tempChange) {
            result[j]++
            tempChange -= c1
          }
        })
        if (tempChange === 0 || j === coins.length) solved = true
      }
    }
  })

  result = result.reverse()
  return result
}
