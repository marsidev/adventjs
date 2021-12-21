export default function listGifts(letter) {
  let regalos = {};
  letter.split(" ").map((r) => {
    if (r !== "" && r.substring(0, 1) !== "_") {
      if (regalos[r]) regalos[r]++;
      else regalos[r] = 1;
    }
  });
  return regalos;
};
