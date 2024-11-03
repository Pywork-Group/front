import {
	useTypeByIdQuery,
	useUpdateTypeMutation,
	type TypeInput,
} from '@/__generated__/output'
import { ADMIN_PAGES } from '@/constants/url.constants'
import { getKeys } from '@/utils/helpers/get-keys.util'
import { useRouter } from 'next/navigation'
import { useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useManageTypeEdit = (queryId: string) => {
	const {
		register: registerInput,
		control,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm<TypeInput>({
		mode: 'onChange',
	})

	const { push } = useRouter()
	const typeId = +queryId

	const { data } = useTypeByIdQuery({
		variables: {
			id: typeId,
		},
		fetchPolicy: "no-cache",
		skip: !typeId,
		onError: (error) => {
			toast.error(error.message)
		},
		onCompleted: ({ typeById }) => {
			getKeys(typeById).forEach(({ key, value }) => {
				setValue(key, value)
			})
		},
	})

	const [updateType] = useUpdateTypeMutation({
		fetchPolicy: "no-cache",
		onCompleted: () => {
			push(ADMIN_PAGES.TYPES)
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const onSubmit: SubmitHandler<TypeInput> = async (data) => {
		await updateType({
			variables: {
				id: typeId,
				data,
			},
		})
	}

	return { registerInput, control, errors, handleSubmit, onSubmit, data }
}
