export default function canMouseEat(direction, game) {
  const nextMove = (game, y, ysum, x, xsum) => game[y + ysum] ? game[y + ysum][x + xsum] ? game[y + ysum][x + xsum] : null : null
  for (let y = 0; y < game.length; y++) {
    const x = game[y].indexOf('m')
    if (x > -1) {
      if (direction === 'up') return nextMove(game, y, -1, x, 0) === '*'
      if (direction === 'down') return nextMove(game, y, 1, x, 0) === '*'
      if (direction === 'left') return nextMove(game, y, 0, x, -1) === '*'
      if (direction === 'right') return nextMove(game, y, 0, x, 1) === '*'
    }
  }
  return false
}
