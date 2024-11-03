import type { IMaskMixinProps } from 'react-imask'
import type { IFieldProps } from '../../field/interface/field.interface'

export type TypeMaskedInputPropsField = IMaskMixinProps<HTMLInputElement> &
	IFieldProps & {
		label?: string
		onChange: () => void
	}
