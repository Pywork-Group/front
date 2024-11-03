'use client'

import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import { useFavoritesStore } from '@/store/favorites-store'
import cn from 'clsx'
import { Heart } from 'lucide-react'
import type { FC } from 'react'
import styles from '../../../Products.module.scss'
import type { IProductProps } from '../../../interface/products.interface'

const ProductFavorite: FC<IProductProps & IClassName> = ({
	product,
	className,
}) => {
	const { toggle, isExists } = useFavoritesStore()

	return (
		<button
			className={cn(
				styles.favorite,
				{
					[styles.filled]: isExists(product.id),
				},
				className && className
			)}
			onClick={() => toggle(product)}
		>
			<Heart size={18} />
		</button>
	)
}

export default ProductFavorite
