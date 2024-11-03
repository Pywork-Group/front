import type { IImage } from '@/components/ui/common/image/interface/image.interface'

export interface IAdvantagesItem {
	name: string
	description: string
	image: IImage
}

export interface IAdvantagesMenu {
	items: IAdvantagesItem[]
	title: string
}
