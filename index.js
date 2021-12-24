import contarOvejas from './src/01/index.mjs'
import listGifts from './src/02/index.mjs'
import isValid from './src/03/index.mjs'
import createXmasTree from './src/04/index.mjs'
import daysToXmas from './src/05/index.mjs'
import sumPairs from './src/06/index.mjs'
import contains from './src/07/index.mjs'
import maxProfit from './src/08/index.mjs'
import groupBy from './src/09/index.mjs'
import getCoins from './src/10/index.mjs'
import shouldBuyFidelity from './src/11/index.mjs'
import getMinJump from './src/12/index.mjs'
import wrapGifts from './src/13/index.mjs'
import missingReindeer from './src/14/index.mjs'
import checkSledJump from './src/15/index.mjs'
import decodeNumbers from './src/16/index.mjs'
import countPackages from './src/17/index.mjs'
import fixFiles from './src/18/index.mjs'
import learn from './src/19/index.mjs'
import pangram from './src/20/index.mjs'
import canCarry from './src/21/index.mjs'
import countDecorations from './src/22/index.mjs'
import canReconfigure from './src/23/index.mjs'
import checkIsSameTree from './src/24/index.mjs'

console.log(contarOvejas([{ name: 'Noa', color: 'azul' }, { name: 'Euge', color: 'rojo' }, { name: 'Navidad', color: 'rojo' }, { name: 'Ki Na Ma', color: 'rojo' }]))
console.log(listGifts('bici coche balón _playstation bici    coche   peluche'))
console.log(isValid('bici coche (balón) bici coche peluche'))
console.log(createXmasTree(3))
console.log(daysToXmas(new Date('Dec 1, 2021')))
console.log(sumPairs([3, 5, 7, 2], 10)) // [3, 7]
console.log(contains({ estanteria1: { cajon1: { producto1: 'coca-cola', producto2: 'fanta', producto3: 'sprite' } }, estanteria2: { cajon1: 'vacio', cajon2: { producto1: 'pantalones', producto2: 'camiseta' } } }, 'camiseta'))
console.log(maxProfit([39, 18, 29, 25, 34, 32, 5]))
console.log(groupBy([6.1, 4.2, 6.3], Math.floor))
console.log(getCoins(51))
console.log(shouldBuyFidelity(1))
console.log(getMinJump([5, 3, 6, 7, 9]))
console.log(wrapGifts(['📷', '⚽️']))
console.log(missingReindeer([0, 2, 3]))
console.log(checkSledJump([1, 2, 3, 2, 1]))
console.log(decodeNumbers(';.W'))
console.log(countPackages([['dapelu', 5, ['midu', 'jelowing']], ['midu', 2, []], ['jelowing', 2, []]], 'dapelu'))
console.log(fixFiles(['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']))
console.log(learn(10, [2, 3, 8, 1, 4]))
console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho'))
console.log(canCarry(4, [[2, 5, 8], [3, 6, 10]]))
console.log(countDecorations({ value: 1, left: { value: 2, left: null, right: null }, right: { value: 3, left: null, right: null } }))
console.log(canReconfigure('abcdefghijkl', 'lkjihgfedcba'))
console.log(checkIsSameTree({ value: 1, left: { value: 2, left: null, right: null }, right: { value: 3, left: null, right: null } }, { value: 1, left: { value: 2, left: null, right: null }, right: { value: 3, left: null, right: null } }))
