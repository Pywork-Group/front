import { useSwiper } from '@/hooks/helpers/slider/useSwiper'
import type { ICurrentProduct } from '@/shared/interfaces/product/product.interface'
import { useState, type FC } from 'react'
import styles from './ProductSingleContent.module.scss'
import ProductSingleContentCenter from './center/ProductSingleContentCenter'
import ProductSingleContentLeft from './left/ProductSingleContentLeft'
import ProductSingleContentRight from './right/ProductSingleContentRight'
import type { IIsSessionUserAdmin } from '@/shared/interfaces/user/user.interface'

const ProductSingleContent: FC<ICurrentProduct & IIsSessionUserAdmin> = ({ product, isAdmin }) => {
	const { setSwiper, currentIndex, setCurrentIndex, goTo } = useSwiper()
	const [color, setColor] = useState(
		product.colors.length > 0 ? product.colors[0] : null
	)
	const [size, setSize] = useState(
		product.colors.length > 0 ? product.sizes[0] : null
	)

	return (
		<div className={styles.content}>
			<ProductSingleContentLeft
				product={product}
				color={color}
				currentIndex={currentIndex}
				goTo={goTo}
			/>
			<ProductSingleContentCenter
				product={product}
				color={color}
				setSwiper={setSwiper}
				setCurrentIndex={setCurrentIndex}
				isAdmin={isAdmin}
			/>
			<ProductSingleContentRight
				product={product}
				size={size}
				setSize={setSize}
				color={color}
				setColor={setColor}
			/>
		</div>
	)
}

export default ProductSingleContent
