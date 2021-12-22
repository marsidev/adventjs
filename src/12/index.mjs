export default function getMinJump(obstacles) {
  let found = false; let jumps = 1
  if (obstacles.length === 0) return jumps
  while (!found) {
    jumps++
    found = true
    for (let i = 0; i < obstacles.length; i++) if (obstacles[i] % jumps === 0) found = false
  }
  return jumps
}
