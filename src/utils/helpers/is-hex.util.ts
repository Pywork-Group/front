export const isHex = (text: string) => {
	const hexRegex = /^[0-9A-Fa-f]+$/
	return hexRegex.test(text)
}
