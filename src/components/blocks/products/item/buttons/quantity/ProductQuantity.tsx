'use client'

import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import cn from 'clsx'
import { Minus, Plus } from 'lucide-react'
import { type FC } from 'react'
import styles from '../../../Products.module.scss'
import type { IProductQuantity } from '../../../interface/products.interface'

const ProductQuantity: FC<IProductQuantity & IClassName> = ({
	product,
	count,
	setCount,
	className,
}) => {
	return (
		<div className={cn(styles.quantity, className && className)}>
			<button
				className={styles.quantityBtn}
				onClick={() => setCount(count - 1)}
				disabled={count === 1}
			>
				<Minus />
			</button>
			<span className={styles.quantityCount}>{count}</span>
			<button
				className={styles.quantityBtn}
				onClick={() => setCount(count + 1)}
			>
				<Plus />
			</button>
		</div>
	)
}

export default ProductQuantity
