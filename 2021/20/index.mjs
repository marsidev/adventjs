export default function pangram(letter) {
	const latinMap = { á: 'a', ă: 'a', ǎ: 'a', â: 'a', ä: 'a', ǟ: 'a', ȧ: 'a', ạ: 'a', à: 'a', ā: 'a', ą: 'a', ᶏ: 'a', é: 'e', ĕ: 'e', ě: 'e', ȩ: 'e', ḝ: 'e', ê: 'e', ḙ: 'e', ë: 'e', ė: 'e', ẹ: 'e', è: 'e', ē: 'e', ę: 'e', ẽ: 'e', ḛ: 'e', í: 'i', ĭ: 'i', ǐ: 'i', î: 'i', ï: 'i', ḯ: 'i', ị: 'i', ì: 'i', ī: 'i', į: 'i', ᶖ: 'i', ĩ: 'i', ḭ: 'i', ó: 'o', ŏ: 'o', ǒ: 'o', ô: 'o', ö: 'o', ȯ: 'o', ọ: 'o', ò: 'o', ȏ: 'o', ō: 'o', ø: 'o', õ: 'o', ú: 'u', ŭ: 'u', û: 'u', ṷ: 'u', ü: 'u', ṳ: 'u', ụ: 'u', ù: 'u', ȗ: 'u', ū: 'u', ů: 'u', ũ: 'u', ṵ: 'u' }

	function latinize () { return this.split('').map(a => latinMap[a] || a).join('') }
	function removeRepeated () { return [...new Set(this.split(''))].join('') }
	function sortString () { return this.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('') }
	function removeSymbols () { return this.replaceAll(/[^a-zA-ZñÑ]/g, '') }

	String.prototype.latinize = latinize
	String.prototype.removeRepeated = removeRepeated
	String.prototype.sortString = sortString
	String.prototype.removeSymbols = removeSymbols

	return letter
		.toLowerCase()
		.latinize()
		.removeRepeated()
		.removeSymbols()
		.sortString()
		.trim() === 'abcdefghijklmnopqrstuvwxyzñ'
}
