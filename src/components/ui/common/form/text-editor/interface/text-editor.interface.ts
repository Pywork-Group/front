import type { IFieldProps } from '../../field/interface/field.interface'

export interface ITextEditor extends IFieldProps {
	onChange: (...event: any[]) => void
	value?: string | null
}
