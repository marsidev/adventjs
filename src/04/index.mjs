export default function createXmasTree(height) {
  let three = ''
  if (height >= 1 && height <= 100) {
    const maxSides = height - 1
    const maxLengthPerRow = maxSides * 2 + 1

    // arbol
    for (let i = 0; i < height; i++) {
      const marks = 2 * i + 1 // 1, 3, 5, 7, 9 ...
      const sides = maxLengthPerRow - marks
      for (let j = 0; j < sides / 2; j++) three += '_'
      for (let j = 0; j < marks; j++) three += '*'
      for (let j = 0; j < sides / 2; j++) three += '_'
      three += '\n'
    }

    // tronco
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < maxSides; j++) three += '_'
      three += '#'
      for (let j = 0; j < maxSides; j++) three += '_'
      if (i === 0) three += '\n'
    }
  }
  // console.log(three)
  return three
}
