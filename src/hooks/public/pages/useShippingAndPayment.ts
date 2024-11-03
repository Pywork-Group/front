import { useShippingAndPaymentQuery } from '@/__generated__/output'

export const useShippingAndPayment = () => {
	const { data, loading } = useShippingAndPaymentQuery({
		fetchPolicy: 'no-cache',
	})

	return {
		shippingAndPayment: data?.shippingAndPayment || null,
		loading,
	}
}
