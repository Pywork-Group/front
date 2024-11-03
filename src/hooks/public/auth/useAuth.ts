import type { TypeAuth } from '@/shared/types/auth/auth.type'
import { usePathname, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export const useAuth = () => {
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const [authType, setAuthType] = useState<TypeAuth>(
		(searchParams.get('type') || 'login') as TypeAuth
	)

	const isLogin = authType === 'login'

	const changeType = () => {
		const newParams = new URLSearchParams(searchParams?.toString())
		newParams.set('type', String(isLogin ? 'register' : 'login'))

		history.pushState({}, '', pathname + `?${newParams.toString()}`)

		setAuthType(isLogin ? 'register' : 'login')
	}

	return { isLogin, changeType }
}
