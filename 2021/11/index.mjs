export default function shouldBuyFidelity(times) {
	const price = 12
	const normalPayout = price * times
	let fidelityPayout = 250
	for (let i = 0; i < times; i++) fidelityPayout += price * Math.pow(0.75, i + 1)
	return fidelityPayout < normalPayout
}
