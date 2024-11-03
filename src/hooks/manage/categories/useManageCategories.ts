import {
	CategoriesDocument,
	useCategoriesQuery,
	useCreateCategoryMutation,
	useDeleteCategoryMutation,
	useDuplicateCategoryMutation,
	useToggleCategoryMutation,
	type QueryInput,
} from '@/__generated__/output'
import { ADMIN_EDITS } from '@/constants/url.constants'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useManageCategories = (
	queryParams: QueryInput,
	debounceSearch: string
) => {
	const { push } = useRouter()

	const { data } = useCategoriesQuery({
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

	const [createCategory] = useCreateCategoryMutation({
		fetchPolicy: 'no-cache',
		onCompleted: ({ createCategory }) => {
			toast.success('Категория успешно создана.')
			push(ADMIN_EDITS.CATEGORY(createCategory.id))
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [deleteCategory] = useDeleteCategoryMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [CategoriesDocument],
		onCompleted: () => {
			toast.success('Категория успешно удалена.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [toggleCategory] = useToggleCategoryMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [CategoriesDocument],
		onCompleted: () => {
			toast.success('Статус категории успешно обновлен.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [duplicateCategory] = useDuplicateCategoryMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [CategoriesDocument],
		onCompleted: () => {
			toast.success('Дубликат категории создан.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	return {
		categories: data?.categories.categories || [],
		count: data?.categories.count || 0,
		createCategory,
		deleteCategory,
		toggleCategory,
		duplicateCategory,
	}
}
