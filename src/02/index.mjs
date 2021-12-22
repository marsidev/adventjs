export default function listGifts(letter) {
  const regalos = {}
  letter.split(' ').forEach((r) => {
    if (r !== '' && r.substring(0, 1) !== '_') {
      if (regalos[r]) regalos[r]++
      else regalos[r] = 1
    }
  })
  return regalos
};
