export default function canReconfigure(from, to) {
  function removeRepeated(str) { return [...new Set(str.split(''))].join('') }
  return from.length === to.length && removeRepeated(from).length === removeRepeated(to).length
}
