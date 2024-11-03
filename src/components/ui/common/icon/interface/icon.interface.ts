import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import type { TypeIcon } from '../type/icon.type'

export interface IIcon extends IClassName {
	name: TypeIcon
	color?: string
	size?: number
}
