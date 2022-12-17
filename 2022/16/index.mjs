export function fixLetter(letter) {
	return letter
		.trim()
		.replace(/([.,!])(.*)/g, '$1 $2')
		.replace(/([.,?!\s])\1+/g, '$1')
		.replace(/\s+([.,?!])/g, '$1')
		.replace(/santa claus/gi, 'Santa Claus')
		.replace(/\b([.?!] \w)|(^\w)/g, $ => $.toUpperCase())
		.replace(/^.*\w$/, $ => $ + '.')
}

// score: 300
