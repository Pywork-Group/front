'use client'

import { useAuth } from '@/hooks/public/auth/useAuth'
import type { FC } from 'react'
import styles from '../Auth.module.scss'
import AuthLogin from './login/AuthLogin'
import AuthRegister from './register/AuthRegister'

const AuthForm: FC = () => {
	const { isLogin, changeType } = useAuth()

	return (
		<div className={styles.fill}>
			<h1 className={styles.heading}>{isLogin ? 'Логин' : 'Регистрация'}</h1>
			{isLogin ? <AuthLogin /> : <AuthRegister />}
			<button className={styles.change} onClick={changeType}>
				{isLogin ? 'Создать аккаунт' : 'Уже есть аккаунт'}
			</button>
		</div>
	)
}

export default AuthForm
