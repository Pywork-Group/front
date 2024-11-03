import type { FC } from 'react'
import type { TypeNumberField } from './interface/number-field.interface'

const NumberField: FC<TypeNumberField> = ({
	className,
	label,
	error,
	type = 'text',
	...rest
}) => {
	return (
		<div className={className && className}>
			{label && <label>{label}</label>}
			{error && <span>{error}</span>}
			<input type={type} {...rest} />
		</div>
	)
}

export default NumberField
