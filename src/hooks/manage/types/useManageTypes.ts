import {
	TypesDocument,
	useCreateTypeMutation,
	useDeleteTypeMutation,
	useDuplicateTypeMutation,
	useToggleTypeMutation,
	useTypesQuery,
	type QueryInput,
} from '@/__generated__/output'
import { ADMIN_EDITS } from '@/constants/url.constants'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useManageTypes = (
	queryParams: QueryInput,
	debounceSearch: string
) => {
	const { push } = useRouter()

	const { data } = useTypesQuery({
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

	const [createType] = useCreateTypeMutation({
		fetchPolicy: 'no-cache',
		onCompleted: ({ createType }) => {
			toast.success('Модель успешно создана.')
			push(ADMIN_EDITS.TYPE(createType.id))
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [deleteType] = useDeleteTypeMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [TypesDocument],
		onCompleted: () => {
			toast.success('Модель успешно удалена.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [toggleType] = useToggleTypeMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [TypesDocument],
		onCompleted: () => {
			toast.success('Статус Модели успешно обновлен.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [duplicateType] = useDuplicateTypeMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [TypesDocument],
		onCompleted: () => {
			toast.success('Дубликат Модели создан.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	return {
		types: data?.types.types || [],
		count: data?.types.count || 0,
		createType,
		deleteType,
		toggleType,
		duplicateType,
	}
}
