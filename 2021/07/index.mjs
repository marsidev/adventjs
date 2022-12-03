export default function contains(store, product) {
	let found = false
	for (const key in store) {
		if (typeof store[key] === 'string') {
			if (store[key].toString() === product.toString()) found = true
		} else if (typeof store[key] === 'object') {
			found = contains(store[key], product)
		}
	}
	return found
}
