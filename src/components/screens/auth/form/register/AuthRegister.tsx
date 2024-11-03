import Field from '@/components/ui/common/form/field/Field'
import {
	emailValidation,
	loginValidation,
	passwordValidation,
} from '@/components/ui/common/form/validations/form.validations'
import { useJwtAuthRegister } from '@/hooks/public/auth/jwt/useJwtAuthRegister'
import type { FC } from 'react'
import styles from '../../Auth.module.scss'
import Button from '@/components/ui/common/form/button/Button'

const AuthRegister: FC = () => {
	const { registerInput, handleSubmit, onSubmit, errors } = useJwtAuthRegister()

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Field
				{...registerInput('login', loginValidation)}
				className={styles.field}
				label="Логин"
				error={errors.login}
			/>
			<Field
				{...registerInput('email', emailValidation)}
				className={styles.field}
				label="E-mail"
				error={errors.email}
			/>
			<Field
				{...registerInput('password', passwordValidation)}
				className={styles.field}
				type='password'
				label="Пароль"
				error={errors.password}
			/>
			<Button buttonClassName={styles.submit}>Регистрация</Button>
		</form>
	)
}

export default AuthRegister
