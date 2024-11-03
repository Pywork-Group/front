import type { User } from '@/__generated__/output'
import type { TypeAuthUser } from '@/store/store'

export interface ISessionUser {
	user?: TypeAuthUser
}

export interface IExistSessionUser {
	user: User
}

export interface IIsSessionUserAdmin {
	isAdmin?: boolean
}