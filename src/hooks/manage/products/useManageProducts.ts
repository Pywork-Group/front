import {
	ProductsDocument,
	useCreateProductMutation,
	useDeleteProductMutation,
	useDuplicateProductMutation,
	useProductsQuery,
	useToggleProductMutation,
	type QueryProductInput,
} from '@/__generated__/output'
import { ADMIN_EDITS } from '@/constants/url.constants'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useManageProducts = (
	queryParams: QueryProductInput,
	debounceSearch: string
) => {
	const { push } = useRouter()

	const { data } = useProductsQuery({
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

	const [createProduct] = useCreateProductMutation({
		fetchPolicy: 'no-cache',
		onCompleted: ({ createProduct }) => {
			toast.success('Продукт успешно создан.')
			push(ADMIN_EDITS.PRODUCT(createProduct.id))
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [deleteProduct] = useDeleteProductMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [ProductsDocument],
		onCompleted: () => {
			toast.success('Продукт успешно удален.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [toggleProduct] = useToggleProductMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [ProductsDocument],
		onCompleted: () => {
			toast.success('Статус продукта успешно обновлен.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [duplicateProduct] = useDuplicateProductMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [ProductsDocument],
		onCompleted: () => {
			toast.success('Дубликат продукта создан.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	return {
		products: data?.products.products || [],
		count: data?.products.count || 0,
		createProduct,
		deleteProduct,
		toggleProduct,
		duplicateProduct,
	}
}
