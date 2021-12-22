export default function groupBy (collection, it) {
  const obj = {}; let temp
  collection.forEach(col => {
    if (typeof it === 'function') temp = it(col)
    else if (typeof it === 'string') temp = col[it]
    if (!obj[temp]) obj[temp] = []
    obj[temp].push(col)
  })
  return obj
}
