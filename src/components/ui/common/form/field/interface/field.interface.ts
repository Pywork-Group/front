import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import type { InputHTMLAttributes } from 'react'
import type { FieldError } from 'react-hook-form'

export interface IFieldProps extends IClassName{
	label?: string
	placeholder?: string
	error?: FieldError | undefined
}

export type TypeField = InputHTMLAttributes<HTMLInputElement> & IFieldProps
