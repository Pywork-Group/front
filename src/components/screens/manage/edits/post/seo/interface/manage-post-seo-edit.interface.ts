import type { PostInput } from '@/__generated__/output'
import type { FieldErrors, UseFormRegister } from 'react-hook-form'

export interface IManagePostSeoEdit {
	registerInput: UseFormRegister<PostInput>
	errors: FieldErrors<PostInput>
}
