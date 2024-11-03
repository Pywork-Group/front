import Button from '@/components/ui/common/form/button/Button'
import Field from '@/components/ui/common/form/field/Field'
import {
	emailValidation,
	passwordValidation,
} from '@/components/ui/common/form/validations/form.validations'
import { useJwtAuthLogin } from '@/hooks/public/auth/jwt/useJwtAuthLogin'
import type { FC } from 'react'
import styles from '../../Auth.module.scss'

const AuthLogin: FC = () => {
	const { registerInput, handleSubmit, onSubmit, errors } = useJwtAuthLogin()

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Field
				{...registerInput('email', emailValidation)}
				className={styles.field}
				label="E-mail"
				error={errors.email}
			/>
			<Field
				{...registerInput('password', passwordValidation)}
				className={styles.field}
				type="password"
				label="Пароль"
				error={errors.password}
			/>
			<Button buttonClassName={styles.submit}>Войти</Button>
		</form>
	)
}

export default AuthLogin
