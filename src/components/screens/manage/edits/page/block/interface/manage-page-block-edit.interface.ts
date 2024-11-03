import type { PageInput, PageType } from '@/__generated__/output'
import type { Control, FieldErrors, UseFormRegister } from 'react-hook-form'

export interface IManagePageBlockEdit {
	type: PageType
	registerInput: UseFormRegister<PageInput>
	control: Control<PageInput, any>
	errors: FieldErrors<PageInput>
}
