export default function contarOvejas(ovejas) {
  return ovejas.filter((o) => o.color === 'rojo' && o.name.toLowerCase().includes('a') && o.name.toLowerCase().includes('n'))
};
