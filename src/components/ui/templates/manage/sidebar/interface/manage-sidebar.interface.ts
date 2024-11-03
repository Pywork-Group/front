import type { ChangeEvent } from 'react'

export interface IManageSidebar {
	className: string
	searchTerm: string
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
}
