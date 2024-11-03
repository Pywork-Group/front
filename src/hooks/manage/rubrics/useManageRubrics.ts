import {
	RubricsDocument,
	useCreateRubricMutation,
	useDeleteRubricMutation,
	useDuplicateRubricMutation,
	useRubricsQuery,
	useToggleRubricMutation,
	type QueryInput,
} from '@/__generated__/output'
import { ADMIN_EDITS } from '@/constants/url.constants'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useManageRubrics = (
	queryParams: QueryInput,
	debounceSearch: string
) => {
	const { push } = useRouter()

	const { data } = useRubricsQuery({
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

	const [createRubric] = useCreateRubricMutation({
		fetchPolicy: 'no-cache',
		onCompleted: ({ createRubric }) => {
			toast.success('Рубрика успешно создана.')
			push(ADMIN_EDITS.RUBRIC(createRubric.id))
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [deleteRubric] = useDeleteRubricMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [RubricsDocument],
		onCompleted: () => {
			toast.success('Рубрика успешно удалена.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [toggleRubric] = useToggleRubricMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [RubricsDocument],
		onCompleted: () => {
			toast.success('Статус рубрики успешно обновлен.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [duplicateRubric] = useDuplicateRubricMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [RubricsDocument],
		onCompleted: () => {
			toast.success('Дубликат рубрики создан.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	return {
		rubrics: data?.rubrics.rubrics || [],
		count: data?.rubrics.count || 0,
		createRubric,
		deleteRubric,
		toggleRubric,
		duplicateRubric,
	}
}
