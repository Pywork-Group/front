import {
	CharacteristicsDocument,
	useCharacteristicsQuery,
	useCreateCharacteristicMutation,
	useDeleteCharacteristicMutation,
	useDuplicateCharacteristicMutation,
	useToggleCharacteristicMutation,
	type QueryInput,
} from '@/__generated__/output'
import { ADMIN_EDITS } from '@/constants/url.constants'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useManageCharacteristics = (
	queryParams: QueryInput,
	debounceSearch: string
) => {
	const { push } = useRouter()

	const { data } = useCharacteristicsQuery({
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

	const [createCharacteristic] = useCreateCharacteristicMutation({
		fetchPolicy: 'no-cache',
		onCompleted: ({ createCharacteristic }) => {
			toast.success('Характеристика успешно создана.')
			push(ADMIN_EDITS.CHARACTERISTIC(createCharacteristic.id))
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [deleteCharacteristic] = useDeleteCharacteristicMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [CharacteristicsDocument],
		onCompleted: () => {
			toast.success('Характеристика успешно удалена.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [toggleCharacteristic] = useToggleCharacteristicMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [CharacteristicsDocument],
		onCompleted: () => {
			toast.success('Статус характеристики успешно обновлен.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const [duplicateCharacteristic] = useDuplicateCharacteristicMutation({
		fetchPolicy: 'no-cache',
		refetchQueries: [CharacteristicsDocument],
		onCompleted: () => {
			toast.success('Дубликат характеристики создан.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	return {
		characteristics: data?.characteristics.characteristics || [],
		count: data?.characteristics.count || 0,
		createCharacteristic,
		deleteCharacteristic,
		toggleCharacteristic,
		duplicateCharacteristic,
	}
}
