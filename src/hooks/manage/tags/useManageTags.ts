import {
	TagsDocument,
	useCreateTagMutation,
	useDeleteTagMutation,
	useDuplicateTagMutation,
	useTagsQuery,
	useToggleTagMutation,
	type QueryInput,
} from '@/__generated__/output'
import { ADMIN_EDITS } from '@/constants/url.constants'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useManageTags = (
	queryParams: QueryInput,
	debounceSearch: string
) => {
	const { push } = useRouter()

	const { data } = useTagsQuery({
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

	const [createTag] = useCreateTagMutation({
		fetchPolicy: 'no-cache',
		onCompleted: ({ createTag }) => {
			toast.success('Метка успешно создана.')
			push(ADMIN_EDITS.TAG(createTag.id))
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [deleteTag] = useDeleteTagMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [TagsDocument],
		onCompleted: () => {
			toast.success('Метка успешно удалена.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [toggleTag] = useToggleTagMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [TagsDocument],
		onCompleted: () => {
			toast.success('Статус метки успешно обновлен.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [duplicateTag] = useDuplicateTagMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [TagsDocument],
		onCompleted: () => {
			toast.success('Дубликат метки создан.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	return {
		tags: data?.tags.tags || [],
		count: data?.tags.count || 0,
		createTag,
		deleteTag,
		toggleTag,
		duplicateTag,
	}
}
