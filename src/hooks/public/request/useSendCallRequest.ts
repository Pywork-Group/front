import {
	useSendCallRequestMutation,
	type CallRequestInput,
} from '@/__generated__/output'
import { useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useSendCallRequest = () => {
	const {
		register: registerInput,
		control,
		formState: { errors },
		handleSubmit,
	} = useForm<CallRequestInput>({
		mode: 'onChange',
	})

	const [sendCallRequest] = useSendCallRequestMutation({
		onCompleted: () => {
			toast.success('Ваш запрос успешно отправлен.')
		},
		onError: () => {
			toast.error('Ошибка при отправке запроса.')
		},
	})

	const onSubmit: SubmitHandler<CallRequestInput> = async (data) => {
		await sendCallRequest({
			variables: {
				data,
			},
		})
	}

	return { registerInput, control, errors, handleSubmit, onSubmit }
}
