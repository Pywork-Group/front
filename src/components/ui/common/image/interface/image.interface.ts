import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import type { CSSProperties } from 'react'

interface IImageProps extends IClassName {
	quality?: number
	src: string
	alt: string
	style?: CSSProperties
	sizes?: string
}

export interface IImage extends IImageProps {
	width: number
	height: number
}

export interface IFilledImage extends IImageProps {}
