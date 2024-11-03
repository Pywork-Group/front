import { useOrderByIdQuery } from '@/__generated__/output'
import toast from 'react-hot-toast'

export const useManageOrderView = (queryId: string) => {
	const orderId = +queryId

	const { data } = useOrderByIdQuery({
		variables: {
			id: orderId,
		},
		fetchPolicy: 'no-cache',
		onError: (error) => {
			toast.error(error.message)
		},
	})

	return { data }
}
