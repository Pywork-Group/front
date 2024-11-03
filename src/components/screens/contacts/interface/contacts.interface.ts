import type { LucideIcon } from 'lucide-react'

export interface IContactsItem {
	icon: LucideIcon
	name: string
	content: string
}

export interface IContacts {
	items: IContactsItem[]
}
