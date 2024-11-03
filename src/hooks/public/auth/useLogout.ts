import { useLogoutMutation } from '@/__generated__/output'
import { destroySession } from '@/server/auth/get-server-session'
import toast from 'react-hot-toast'

export const useLogout = () => {
	const [logoutMutate] = useLogoutMutation({
		onCompleted: async () => {
			await destroySession()
			toast.success('Вы успешно вышли из системы')
		},
		onError: ({ message }) => {
			toast.error(message)
		},
	})

	const logout = () => logoutMutate()

	return { logout }
}
