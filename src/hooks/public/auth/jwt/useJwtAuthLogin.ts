import {
	UserRole,
	useLoginMutation,
	type AuthLoginInput,
	type AuthResponse,
} from '@/__generated__/output'
import { ADMIN_PAGES, USER_PAGES } from '@/constants/url.constants'
import { setServerSession } from '@/server/auth/get-server-session'
import { useRouter } from 'next/navigation'
import { useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useJwtAuthLogin = () => {
	const {
		register: registerInput,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<AuthLoginInput>({
		mode: 'onChange',
	})

	const { replace } = useRouter()

	const [login] = useLoginMutation()

	const onSubmit: SubmitHandler<AuthLoginInput> = async (data) => {
		const onSuccess = (data: any) => {
			const response = data?.data?.login as AuthResponse

			if (!response) throw new Error('Ошибка при входе в систему')

			setServerSession(response.user)

			replace(
				response.user.role === UserRole.Admin
					? ADMIN_PAGES.PRODUCTS
					: USER_PAGES.PROFILE
			)

			return 'Успешно вошли в систему'
		}

		const toastOptions = {
			loading: 'Загрузка',
			success: onSuccess,
			error: () => {
				return 'Ошибка при входе в систему'
			},
		}

		toast.promise(
			login({
				variables: { data },
			}),
			toastOptions
		)
	}

	return { registerInput, errors, handleSubmit, onSubmit, reset }
}
