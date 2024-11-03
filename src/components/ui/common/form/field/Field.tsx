import cn from 'clsx'
import { Eye, EyeOff } from 'lucide-react'
import { forwardRef, useState } from 'react'
import globalStyles from '../Form.module.scss'
import styles from './Field.module.scss'
import type { TypeField } from './interface/field.interface'

const Field = forwardRef<HTMLInputElement, TypeField>(
	({ label, className, error, type = 'text', style, ...rest }, ref) => {
		const isPassword = type === 'password'
		const [isShow, setIsShow] = isPassword ? useState(false) : [false, () => {}]

		return (
			<div className={cn(globalStyles.field, className && className)}>
				{label && <label className={globalStyles.label}>{label}</label>}
				{error && <p className={globalStyles.error}>{error.message}</p>}
				{isPassword ? (
					<div className={cn(globalStyles.box, styles.box)}>
						<input
							ref={ref}
							type={isShow ? 'text' : 'password'}
							{...rest}
							className={globalStyles.input}
						/>
						<button
							type="button"
							className={styles.show}
							onClick={() => setIsShow(!isShow)}
						>
							{isShow ? <EyeOff /> : <Eye />}
						</button>
					</div>
				) : (
					<input
						className={globalStyles.input}
						ref={ref}
						type={type}
						{...rest}
					/>
				)}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
