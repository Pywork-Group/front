import type { CategoryInput } from '@/__generated__/output'
import type { Control, FieldErrors, UseFormRegister } from 'react-hook-form'

export interface IManageCategoryBlockEdit {
	registerInput: UseFormRegister<CategoryInput>
	control: Control<CategoryInput, any>
	errors: FieldErrors<CategoryInput>
}
