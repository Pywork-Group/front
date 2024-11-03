import {
	HolidaysDocument,
	useCreateHolidayMutation,
	useDeleteHolidayMutation,
	useDuplicateHolidayMutation,
	useHolidaysQuery,
	useToggleHolidayMutation,
	type QueryInput,
} from '@/__generated__/output'
import { ADMIN_EDITS } from '@/constants/url.constants'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useManageHolidays = (
	queryParams: QueryInput,
	debounceSearch: string
) => {
	const { push } = useRouter()

	const { data } = useHolidaysQuery({
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

	const [createHoliday] = useCreateHolidayMutation({
		fetchPolicy: 'no-cache',
		onCompleted: ({ createHoliday }) => {
			toast.success('Праздник успешно создан.')
			push(ADMIN_EDITS.HOLIDAY(createHoliday.id))
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [deleteHoliday] = useDeleteHolidayMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [HolidaysDocument],
		onCompleted: () => {
			toast.success('Праздник успешно удален.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [toggleHoliday] = useToggleHolidayMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [HolidaysDocument],
		onCompleted: () => {
			toast.success('Статус праздника успешно обновлен.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [duplicateHoliday] = useDuplicateHolidayMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [HolidaysDocument],
		onCompleted: () => {
			toast.success('Дубликат праздника создан.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	return {
		holidays: data?.holidays.holidays || [],
		count: data?.holidays.count || 0,
		createHoliday,
		deleteHoliday,
		toggleHoliday,
		duplicateHoliday,
	}
}
