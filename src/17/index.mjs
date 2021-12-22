export default function countPackages(carriers, carrierID) {
  const carrier = carriers.find(c => c[0] === carrierID); let result = carrier[1]
  carrier[2].forEach(c => result += countPackages(carriers, c))
  return result
}
