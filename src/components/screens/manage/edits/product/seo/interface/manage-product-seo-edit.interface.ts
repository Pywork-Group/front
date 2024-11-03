import type { ProductInput } from '@/__generated__/output'
import type { FieldErrors, UseFormRegister } from 'react-hook-form'

export interface IManageProductSeoEdit {
	registerInput: UseFormRegister<ProductInput>
	errors: FieldErrors<ProductInput>
}
