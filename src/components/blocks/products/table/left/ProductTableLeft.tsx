import StaticImage from '@/components/ui/common/image/StaticImage'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import type { TypeColor } from '@/shared/types/color/color.type'
import { isNewest } from '@/utils/helpers/is-newest.util'
import Link from 'next/link'
import type { FC } from 'react'
import type { IProductProps } from '../../interface/products.interface'
import styles from '../ProductTable.module.scss'

const ProductTableLeft: FC<IProductProps & TypeColor> = ({
	product,
	color,
}) => {
	const images = color?.images || product.images

	return (
		<div className={styles.left}>
			{product.types.length > 0 && (
				<div className={styles.types}>
					{product.types.map((type, index) => (
						<div className={styles.type} key={index}>
							<StaticImage
								className="w-auto h-auto"
								src={type.iconPath}
								width={0}
								height={0}
								sizes="100vw"
								alt="Type"
							/>
						</div>
					))}
				</div>
			)}
			<div className={styles.leftFill}>
				<Link
					className={styles.preview}
					href={PUBLIC_PAGES.PRODUCT(product.slug)}
				>
					<StaticImage
						src={images[0]}
						width={160}
						height={160}
						alt={product.name}
					/>
				</Link>
				<div className={styles.info}>
					{(product.oldPrice || isNewest(product.createdAt)) && (
						<div className={styles.tags}>
							{product.oldPrice && (
								<span className={styles.saleTag}>Акция</span>
							)}
							{isNewest(product.createdAt) && (
								<span className={styles.newestTag}>Новинка</span>
							)}
						</div>
					)}
					<h3 className={styles.name}>{product.name}</h3>
				</div>
			</div>
		</div>
	)
}

export default ProductTableLeft
