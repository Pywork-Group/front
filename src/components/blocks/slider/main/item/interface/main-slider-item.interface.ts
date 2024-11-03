import type { TypeMainSliderItem } from '@/shared/types/main-slider/main-slider.type'

export interface IMainSliderItem {
	isBeginning: boolean
	isEnd: boolean
	prev: () => void
	next: () => void
	number: number
	item: TypeMainSliderItem
}
