import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'

export interface IContainer extends IClassName {
	variant?: 'extra' | 'lg' | 'md' | 'sm' | 'smallest'
}
