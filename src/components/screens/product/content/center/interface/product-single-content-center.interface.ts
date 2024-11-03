import type { Dispatch, SetStateAction } from 'react'

export interface IProductSingleContentCenter {
	setSwiper: Dispatch<SetStateAction<any>>
	setCurrentIndex: Dispatch<SetStateAction<number>>
}
