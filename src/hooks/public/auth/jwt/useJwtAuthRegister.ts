import {
	useRegisterMutation,
	type AuthRegisterInput,
	type AuthResponse,
} from '@/__generated__/output'
import { setServerSession } from '@/server/auth/get-server-session'
import { useRouter } from 'next/navigation'
import { useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useJwtAuthRegister = () => {
	const {
		register: registerInput,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<AuthRegisterInput>({
		mode: 'onChange',
	})

	const { replace } = useRouter()

	const [register] = useRegisterMutation()

	const onSubmit: SubmitHandler<AuthRegisterInput> = async (data) => {
		const onSuccess = (data: any) => {
			const response = data?.data?.register as AuthResponse

			if (!response) throw new Error('Ошибка при регистрации')

			setServerSession(response.user)

			// TODO: Replace after auth

			// const user = response.user
			// console.log(user)

			// replace(
			// 	user.role === UserRole.Admin ? ADMIN_PAGES.HOME : USER_PAGES.PROFILE
			// )

			reset()

			return 'Вы успешно зарегистрировались'
		}

		const toastOptions = {
			loading: 'Загрузка',
			success: onSuccess,
			error: () => {
				return 'Ошибка при регистрации'
			},
		}

		toast.promise(
			register({
				variables: { data },
			}),
			toastOptions
		)
	}

	return { registerInput, errors, handleSubmit, onSubmit }
}
