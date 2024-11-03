import { useForBuyersQuery } from '@/__generated__/output'

export const useForBuyers = () => {
	const { data, loading } = useForBuyersQuery({
		fetchPolicy: 'no-cache',
	})

	return {
		forBuyers: data?.forBuyers || null,
		loading,
	}
}
