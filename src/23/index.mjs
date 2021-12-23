export default function canReconfigure(from, to) {
  const removeRepeated = str => [...new Set(str.split(''))].join('')
  return from.length === to.length && removeRepeated(from).length === removeRepeated(to).length
}
