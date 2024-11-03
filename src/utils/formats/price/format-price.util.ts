export const formatPrice = (price: string) => {
	return parseFloat(price.replace(',', '.')).toFixed(2)
}
