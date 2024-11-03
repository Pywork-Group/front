import {
	OrdersDocument,
	type QueryInput,
	useDeleteOrderMutation,
	useOrdersQuery,
} from '@/__generated__/output'
import toast from 'react-hot-toast'

export const useManageOrders = (
	queryParams: QueryInput,
	debounceSearch: string
) => {
	const { data } = useOrdersQuery({
		variables: {
			query: {
				...queryParams,
				searchTerm: debounceSearch,
			},
		},
		fetchPolicy: 'no-cache',
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [deleteOrder] = useDeleteOrderMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [OrdersDocument],
		onCompleted: () => {
			toast.success('Заказ успешно удален.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	return {
		orders: data?.orders.orders || [],
		count: data?.orders.count || 0,
		deleteOrder,
	}
}
