import { wrapping } from './01/index.mjs'
import { countHours } from './02/index.mjs'
import { distributeGifts } from './03/index.mjs'
import { fitsInOneBox } from './04/index.mjs'
import { getMaxGifts } from './05/index.mjs'
import { createCube } from './06/index.mjs'
import { getGiftsToRefill } from './07/index.mjs'
import { checkPart } from './08/index.mjs'
import { countTime } from './09/index.mjs'

console.log('Reto 1: ', wrapping(['cat', 'game', 'socks']))
console.log()
console.log('Reto 2: ', countHours(2022, ['01/06', '04/01', '12/25']))
console.log()
console.log('Reto 3: ', distributeGifts(['book', 'doll', 'ball'], ['dasher', 'dancer']))
console.log()
console.log(
	'Reto 4: ',
	fitsInOneBox([
		{ l: 1, w: 1, h: 1 },
		{ l: 3, w: 3, h: 3 },
		{ l: 2, w: 2, h: 2 }
	])
)
console.log()
console.log('Reto 5: ', getMaxGifts([12, 3, 11, 5, 7], 20, 3))
console.log()
console.log('Reto 6: ', createCube(3))
console.log()
console.log(
	'Reto 7: ',
	getGiftsToRefill(['bici', 'coche', 'bici', 'bici'], ['coche', 'bici', 'muñeca', 'coche'], ['bici', 'pc', 'pc'])
)
console.log()
console.log('Reto 8: ', checkPart('zzzoonzzz'))
console.log()
console.log('Reto 9: ', countTime([0, 0, 1, 0, 0]))
