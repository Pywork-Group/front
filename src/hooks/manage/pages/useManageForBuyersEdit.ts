import {
	useForBuyersQuery,
	useUpdateForBuyersMutation,
	type ForBuyersInput,
} from '@/__generated__/output'
import { ADMIN_PAGES } from '@/constants/url.constants'
import { getKeys } from '@/utils/helpers/get-keys.util'
import { useRouter } from 'next/navigation'
import { useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useManageForBuyersEdit = () => {
	const {
		register: registerInput,
		control,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm<ForBuyersInput>({
		mode: 'onChange',
	})

	const { push } = useRouter()

	const { data } = useForBuyersQuery({
		fetchPolicy: 'no-cache',
		onError: (error) => {
			toast.error(error.message)
		},
		onCompleted: ({ forBuyers }) => {
			getKeys(forBuyers).forEach(({ key, value }) => {
				setValue(key, value)
			})
		},
	})

	const [updateForBuyers] = useUpdateForBuyersMutation({
		fetchPolicy: 'no-cache',
		onCompleted: () => {
			push(ADMIN_PAGES.PRODUCTS)
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const onSubmit: SubmitHandler<ForBuyersInput> = async (data) => {
		await updateForBuyers({
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
