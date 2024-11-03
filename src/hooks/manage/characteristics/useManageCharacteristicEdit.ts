import {
	useCharacteristicByIdQuery,
	useUpdateCharacteristicMutation,
	type CharacteristicInput,
} from '@/__generated__/output'
import { ADMIN_PAGES } from '@/constants/url.constants'
import { CHARACTERISTIC_TYPES_TRANSLATE } from '@/translates/characteristic-types.translate'
import { getKeys } from '@/utils/helpers/get-keys.util'
import { useRouter } from 'next/navigation'
import { useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useManageCharacteristicEdit = (queryId: string) => {
	const {
		register: registerInput,
		control,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm<CharacteristicInput>({
		mode: 'onChange',
	})

	const { push } = useRouter()
	const characteristicId = +queryId

	const { data } = useCharacteristicByIdQuery({
		variables: {
			id: characteristicId,
		},
		fetchPolicy: 'no-cache',
		skip: !characteristicId,
		onError: (error) => {
			toast.error(error.message)
		},
		onCompleted: ({ characteristicById }) => {
			const { type, ...response } = characteristicById
			getKeys(response).forEach(({ key, value }) => {
				setValue(key, value)
			})
			setValue('type', {
				name: CHARACTERISTIC_TYPES_TRANSLATE[type],
				value: type,
			})
		},
	})

	const [updateCharacteristic] = useUpdateCharacteristicMutation({
		fetchPolicy: 'no-cache',
		onCompleted: () => {
			push(ADMIN_PAGES.CHARACTERISTICS)
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const onSubmit: SubmitHandler<CharacteristicInput> = async (data) => {
		await updateCharacteristic({
			variables: {
				id: characteristicId,
				data,
			},
		})
	}

	return { registerInput, control, errors, handleSubmit, onSubmit, data }
}
