import {
	useShippingAndPaymentQuery,
	useUpdateShippingAndPaymentMutation,
	type ShippingAndPaymentInput,
} from '@/__generated__/output'
import { ADMIN_PAGES } from '@/constants/url.constants'
import { getKeys } from '@/utils/helpers/get-keys.util'
import { useRouter } from 'next/navigation'
import { useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useManageShippingAndPaymentEdit = () => {
	const {
		register: registerInput,
		control,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm<ShippingAndPaymentInput>({
		mode: 'onChange',
	})

	const { push } = useRouter()

	useShippingAndPaymentQuery({
		fetchPolicy: 'no-cache',
		onError: (error) => {
			toast.error(error.message)
		},
		onCompleted: ({ shippingAndPayment }) => {
			getKeys(shippingAndPayment).forEach(({ key, value }) => {
				setValue(key, value)
			})
		},
	})

	const [updateShippingAndPayment] = useUpdateShippingAndPaymentMutation({
		fetchPolicy: 'no-cache',
		onCompleted: () => {
			push(ADMIN_PAGES.PRODUCTS)
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const onSubmit: SubmitHandler<ShippingAndPaymentInput> = async (data) => {
		await updateShippingAndPayment({
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
	}
}
