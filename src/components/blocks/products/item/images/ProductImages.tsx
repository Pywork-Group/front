'use client'

import StaticImage from '@/components/ui/common/image/StaticImage'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import type { TypeColor } from '@/shared/types/color/color.type'
import Link from 'next/link'
import type { FC } from 'react'
import 'swiper/css'
import styles from '../../Products.module.scss'
import type { IProductProps } from '../../interface/products.interface'

const ProductImages: FC<IProductProps & TypeColor> = ({ product, color }) => {
	const images = color?.images || product.images

	return (
		<Link className={styles.preview} href={PUBLIC_PAGES.PRODUCT(product.slug)}>
			<StaticImage
				src={images[0]}
				width={200}
				height={150}
				alt={product.name}
			/>
		</Link>
	)
}

export default ProductImages
