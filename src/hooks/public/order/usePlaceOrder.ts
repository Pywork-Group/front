import {
	OrderStatus,
	usePlaceOrderMutation,
	type PlaceOrderInput,
} from '@/__generated__/output'
import type { ICartItem } from '@/store/types/cart.type'
import { useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

export const usePlaceOrder = (cart: ICartItem[], totalPrice: number, removeAll: () => void) => {
	const {
		register: registerInput,
		formState: { errors },
		handleSubmit,
		control,
		reset,
	} = useForm<PlaceOrderInput>({
		mode: 'onChange',
		defaultValues: {
			orderStatus: OrderStatus.InProcess,
			total: String(totalPrice),
			items: cart.map((item) => ({
				quantity: item.count,
				productId: item.id,
				color: item.selectedColor,
				size: item.selectedSize
			})),
		},
	})

	const [placeOrder] = usePlaceOrderMutation()

	const onSubmit: SubmitHandler<PlaceOrderInput> = (data) => {
		const onSuccess = () => {
			reset()
			removeAll()
			return 'Ваш заказ успешно создан'
		}

		const toastOptions = {
			loading: 'Loading',
			success: onSuccess,
			error: () => {
				return 'При создании заказа произошла ошибка'
			},
		}

		toast.promise(
			placeOrder({
				variables: {
					data: {
						name: data.name,
						phone: data.phone,
						total: data.total,
						items: data.items,
						orderStatus: data.orderStatus,
					},
				},
			}),
			toastOptions
		)
	}

	return { registerInput, control, errors, handleSubmit, onSubmit }
}
