export default function checkSledJump(heights) {
  let isUp = false; let isDown = false
  for (let i = 0; i < heights.length - 1; i++) {
    if (!isUp && heights[i] >= heights[i + 1]) return false // si comienza bajando
    if (heights[i] === heights[i + 1]) return false // si no es estricto
    if (!isUp && heights[i] < heights[i + 1]) isUp = true // subida
    if (isUp && !isDown && heights[i] > heights[i + 1]) isDown = true // bajada
    if (isUp && isDown && heights[i] < heights[i + 1]) return false // si vuelve a subir
  }
  if (isUp & isDown) return true
  return false
}
