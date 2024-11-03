import type { IProductSelected } from '@/components/blocks/products/interface/products.interface'
import ProductAddToCart from '@/components/blocks/products/item/buttons/add-to-cart/ProductAddToCart'
import ProductQuantity from '@/components/blocks/products/item/buttons/quantity/ProductQuantity'
import type { ICurrentProduct } from '@/shared/interfaces/product/product.interface'
import { useState, type FC } from 'react'
import styles from './ProductSingleContentButtons.module.scss'

const ProductSingleContentButtons: FC<ICurrentProduct & IProductSelected> = ({
	product,
	color,
	size,
}) => {
	const [count, setCount] = useState(1)

	return (
		<div className={styles.buttons}>
			<ProductQuantity
				product={product}
				className={styles.quantity}
				count={count}
				setCount={setCount}
			/>
			<ProductAddToCart
				product={product}
				className={styles.cart}
				icon={{
					src: '/images/icons/cart-big.png',
					width: 35,
					height: 35,
					alt: 'Cart',
				}}
				count={count}
				color={color}
				size={size}
			/>
		</div>
	)
}

export default ProductSingleContentButtons
