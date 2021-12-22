export default function maxProfit(prices) {
  let profit = -1; let diff
  prices.forEach((p, i) => {
    prices.forEach((q, j) => {
      if (j > i && p < q) {
        diff = q - p
        if (diff > profit && diff > 0) {
          // console.log({ p, q, profitBefore: profit, newProfit: diff })
          profit = diff
        }
      }
    })
  })
  return profit
}
