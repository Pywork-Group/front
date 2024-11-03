import type { FC } from 'react'
import type { IFilledImage } from './interface/image.interface'

const FilledImage: FC<IFilledImage> = ({
	quality = 100,
	src,
	alt,
	sizes,
	className,
}) => {
	return (
		<img
			src={src}
			alt={alt}
			className={className && className}
			style={{ position: 'absolute' }}
		/>
	)
}

export default FilledImage
