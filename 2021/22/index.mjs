export default function countDecorations(bigTree) {
	return bigTree === null ? 0 : bigTree.value + countDecorations(bigTree.left) + countDecorations(bigTree.right)
}
