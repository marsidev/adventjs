import { wrapping } from './01/index.mjs'
import { countHours } from './02/index.mjs'
import { distributeGifts } from './03/index.mjs'
import { fitsInOneBox } from './04/index.mjs'

console.log('Reto 1: ', wrapping(['cat', 'game', 'socks']))
console.log()
console.log('Reto 2: ', countHours(2022, ['01/06', '04/01', '12/25']))
console.log()
console.log('Reto 3: ', distributeGifts(['book', 'doll', 'ball'], ['dasher', 'dancer']))
console.log()
console.log('Reto 4: ', fitsInOneBox([
	{ l: 1, w: 1, h: 1 },
	{ l: 3, w: 3, h: 3 },
	{ l: 2, w: 2, h: 2 }
]))
