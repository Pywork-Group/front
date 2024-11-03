import type { PageInput } from '@/__generated__/output'
import type { FieldErrors, UseFormRegister } from 'react-hook-form'

export interface IManagePageSeoEdit {
	registerInput: UseFormRegister<PageInput>
	errors: FieldErrors<PageInput>
}
