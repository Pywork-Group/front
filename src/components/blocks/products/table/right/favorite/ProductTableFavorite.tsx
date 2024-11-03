'use client'

import StaticImage from '@/components/ui/common/image/StaticImage'
import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import { useFavoritesStore } from '@/store/favorites-store'
import cn from 'clsx'
import type { FC } from 'react'
import styles from '../../ProductTable.module.scss'
import type { IProductProps } from '../../../interface/products.interface'
import { Heart } from 'lucide-react'

const ProductTableFavorite: FC<IProductProps & IClassName> = ({
	product,
	className,
}) => {
	const { toggle } = useFavoritesStore()

	return (
		<button
			className={cn(styles.favorite, className && className)}
			onClick={() => toggle(product)}
		>
			<Heart size={18} />
		</button>
	)
}

export default ProductTableFavorite
