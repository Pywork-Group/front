import type { TypeSize } from '@/shared/types/size/size.type'
import type { Dispatch, SetStateAction } from 'react'

export interface IProductSizes extends TypeSize {
	setSize: Dispatch<SetStateAction<TypeSize['size']>>
}
