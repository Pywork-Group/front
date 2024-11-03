'use client'

import StaticImage from '@/components/ui/common/image/StaticImage'
import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import { useCartStore } from '@/store/cart-store'
import cn from 'clsx'
import { Trash2 } from 'lucide-react'
import type { FC } from 'react'
import type {
	IProductProps,
	IProductSelected,
} from '../../../interface/products.interface'
import styles from '../../ProductTable.module.scss'
import type { IAddToCart } from './interface/add-to-cart.interface'

const ProductTableAddToCart: FC<
	IProductProps & IClassName & IAddToCart & IProductSelected
> = ({ product, className, icon, count, color, size }) => {
	const { toggle, isExists } = useCartStore()

	return (
		<button
			className={cn(
				styles.addToCart,
				{
					[styles.removeFromCart]: isExists(product.id),
				},
				className && className
			)}
			onClick={() => toggle(product, count, color, size)}
		>
			{isExists(product.id) ? (
				<>
					<Trash2 size={16} />
					УДАЛИТЬ
				</>
			) : (
				<>
					<StaticImage
						src={icon.src}
						width={icon.width}
						height={icon.height}
						alt={icon.alt}
					/>
					В КОРЗИНУ
				</>
			)}
		</button>
	)
}

export default ProductTableAddToCart
