import { useState, type FC } from 'react'
import styles from '../../Products.module.scss'
import type {
	IProductProps,
	IProductSelected,
} from '../../interface/products.interface'
import ProductAddToCart from './add-to-cart/ProductAddToCart'
import ProductFavorite from './favorite/ProductFavorite'
import ProductQuantity from './quantity/ProductQuantity'

const ProductButtons: FC<IProductProps & IProductSelected> = ({
	product,
	size,
	color,
}) => {
	const [count, setCount] = useState(1)

	return (
		<div className={styles.buttons}>
			<ProductQuantity product={product} count={count} setCount={setCount} />
			<div className={styles.actions}>
				<ProductFavorite product={product} />
			</div>
			<ProductAddToCart
				product={product}
				icon={{
					src: '/images/icons/cart.png',
					width: 16,
					height: 16,
					alt: 'Cart',
				}}
				count={count}
				color={color}
				size={size}
			/>
		</div>
	)
}

export default ProductButtons
