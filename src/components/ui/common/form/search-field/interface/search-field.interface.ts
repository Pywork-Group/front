import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import type { ChangeEvent } from 'react'

export interface ISearchField extends IClassName {
	size?: 'sm' | 'md'
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
	placeholder?: string
	label?: string
	wrapperClassName?: string
	inputClassName?: string
}
