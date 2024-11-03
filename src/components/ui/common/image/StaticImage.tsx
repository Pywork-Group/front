import type { FC } from 'react'
import type { IImage } from './interface/image.interface'

const StaticImage: FC<IImage> = ({
	quality = 100,
	src,
	alt,
	width,
	height,
	sizes,
	className,
}) => {
	return (
		<img
			width={width}
			height={height}
			src={src}
			alt={alt}
			className={className && className}
		/>
	)
}

export default StaticImage
