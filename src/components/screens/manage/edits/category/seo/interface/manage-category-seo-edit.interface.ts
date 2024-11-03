import type { CategoryInput } from '@/__generated__/output'
import type { FieldErrors, UseFormRegister } from 'react-hook-form'

export interface IManageCategorySeoEdit {
	registerInput: UseFormRegister<CategoryInput>
	errors: FieldErrors<CategoryInput>
}
