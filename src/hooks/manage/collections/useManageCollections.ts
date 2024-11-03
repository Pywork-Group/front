import {
	CollectionsDocument,
	useCollectionsQuery,
	useCreateCollectionMutation,
	useDeleteCollectionMutation,
	useDuplicateCollectionMutation,
	useToggleCollectionMutation,
	type QueryInput,
} from '@/__generated__/output'
import { ADMIN_EDITS } from '@/constants/url.constants'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useManageCollections = (
	queryParams: QueryInput,
	debounceSearch: string
) => {
	const { push } = useRouter()

	const { data } = useCollectionsQuery({
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

	const [createCollection] = useCreateCollectionMutation({
		fetchPolicy: 'no-cache',
		onCompleted: ({ createCollection }) => {
			toast.success('Коллекция успешно создана.')
			push(ADMIN_EDITS.COLLECTION(createCollection.id))
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [deleteCollection] = useDeleteCollectionMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [CollectionsDocument],
		onCompleted: () => {
			toast.success('Коллекция успешно удалена.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [toggleCollection] = useToggleCollectionMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [CollectionsDocument],
		onCompleted: () => {
			toast.success('Статус коллекции успешно обновлен.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [duplicateCollection] = useDuplicateCollectionMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [CollectionsDocument],
		onCompleted: () => {
			toast.success('Дубликат коллекции создан.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	return {
		collections: data?.collections.collections || [],
		count: data?.collections.count || 0,
		createCollection,
		deleteCollection,
		toggleCollection,
		duplicateCollection,
	}
}
