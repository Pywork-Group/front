import type { User } from '@/__generated__/output'
import { create } from 'zustand'

export type TypeAuthUser = User | null

type TypeAuthState = {
	isLoading: boolean
	user: TypeAuthUser
	setUser: (user: TypeAuthUser) => void
}

export const useAuthStore = create<TypeAuthState>()((set) => ({
	isLoading: true,
	user: null,
	setUser: (user) => set({ user }),
}))

export const useSetAuth = (user: TypeAuthUser) =>
	useAuthStore.setState({ user })

export const useSetLoading = (isLoading: boolean) =>
	useAuthStore.setState({ isLoading })

export const useGetAuth = () => useAuthStore.getState().user
