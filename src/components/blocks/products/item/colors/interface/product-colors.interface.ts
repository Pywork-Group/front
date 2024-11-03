import type { TypeColor } from '@/shared/types/color/color.type'
import type { Dispatch, SetStateAction } from 'react'

export interface IProductColors extends TypeColor {
	setColor: Dispatch<SetStateAction<TypeColor['color']>>
}
