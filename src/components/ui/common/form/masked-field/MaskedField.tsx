import cn from 'clsx'
import { forwardRef } from 'react'
import { IMaskInput } from 'react-imask'
import globalStyles from '../Form.module.scss'
import type { TypeMaskedInputPropsField } from './interface/masked-field.interface'

const MaskedField = forwardRef<HTMLInputElement, TypeMaskedInputPropsField>(
	({ label, error, className, ...rest }, ref) => {
		return (
			<div className={cn(globalStyles.field, className && className)}>
				{label && <label className={globalStyles.label}>{label}</label>}
				{error && <p className={globalStyles.error}>{error.message}</p>}
				<IMaskInput ref={ref} className={globalStyles.input} {...rest} />
			</div>
		)
	}
)

MaskedField.displayName = 'MaskedField'

export default MaskedField
