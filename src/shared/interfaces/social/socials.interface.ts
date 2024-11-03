import type { IImage } from '@/components/ui/common/image/interface/image.interface'

export interface ISocialItem {
	icon: IImage
	href: string
}

export interface ISocial {
	items: ISocialItem[]
}
