import {
	useAboutQuery,
	useUpdateAboutMutation,
	type AboutInput,
} from '@/__generated__/output'
import { ADMIN_PAGES } from '@/constants/url.constants'
import { getKeys } from '@/utils/helpers/get-keys.util'
import { useRouter } from 'next/navigation'
import { useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useManageAboutEdit = () => {
	const {
		register: registerInput,
		control,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm<AboutInput>({
		mode: 'onChange',
	})

	const { push } = useRouter()

	const { data } = useAboutQuery({
		fetchPolicy: 'no-cache',
		onError: (error) => {
			toast.error(error.message)
		},
		onCompleted: ({ about }) => {
			getKeys(about).forEach(({ key, value }) => {
				setValue(key, value)
			})
		},
	})

	const [updateAbout] = useUpdateAboutMutation({
		fetchPolicy: 'no-cache',
		onCompleted: () => {
			push(ADMIN_PAGES.PRODUCTS)
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const onSubmit: SubmitHandler<AboutInput> = async (data) => {
		await updateAbout({
			variables: {
				data,
			},
		})
	}

	return {
		registerInput,
		control,
		errors,
		handleSubmit,
		onSubmit,
		data,
	}
}
