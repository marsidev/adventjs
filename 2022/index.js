import { wrapping } from './01/index.mjs'
import { countHours } from './02/index.mjs'
import { distributeGifts } from './03/index.mjs'

console.log('Reto 1: ', wrapping(['cat', 'game', 'socks']))
console.log()
console.log('Reto 2: ', countHours(2022, ['01/06', '04/01', '12/25']))
console.log()
console.log('Reto 3: ', distributeGifts(['book', 'doll', 'ball'], ['dasher', 'dancer']))
