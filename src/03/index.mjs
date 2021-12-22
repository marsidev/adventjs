export default function isValid(letter) {
  const leftParentheses = letter.split('(').length - 1
  const rightParentheses = letter.split(')').length - 1
  const validContent = !/{|}|\[|\]/g.test(letter) && /\([A-ñZ\s]+\)/gi.test(letter)
  return leftParentheses > 0 && leftParentheses === rightParentheses && validContent
}
