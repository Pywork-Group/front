'use client'

import ManageActions from '@/components/ui/elements/manage/actions/ManageActions'
import { ADMIN_EDITS } from '@/constants/url.constants'
import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import type { IManageActions } from '@/shared/interfaces/manage/manage.interface'
import type { IIsSessionUserAdmin } from '@/shared/interfaces/user/user.interface'
import cn from 'clsx'
import { useState, type FC } from 'react'
import styles from '../Products.module.scss'
import type { IProductProps } from '../interface/products.interface'
import ProductButtons from './buttons/ProductButtons'
import ProductColors from './colors/ProductColors'
import ProductImages from './images/ProductImages'
import ProductInfo from './info/ProductInfo'
import ProductSizes from './sizes/ProductSizes'
import ProductTop from './top/ProductTop'

const Product: FC<
	IProductProps & IManageActions & IClassName & IIsSessionUserAdmin
> = ({
	isAdmin,
	product,
	deleteHandler,
	toggleHandler,
	duplicateHandler,
	place,
	className,
}) => {
	const [color, setColor] = useState(
		product.colors.length > 0 ? product.colors[0] : null
	)
	const [size, setSize] = useState(
		product.colors.length > 0 ? product.sizes[0] : null
	)

	return (
		<div className={cn(styles.item, className && className)}>
			<ProductTop product={product} isAdmin={isAdmin} />
			<ProductImages product={product} color={color} />
			<ProductInfo
				product={product}
				price={size ? size.price : product.price}
				oldPrice={size ? size.oldPrice : product.oldPrice}
			/>
			<ProductSizes product={product} size={size} setSize={setSize} />
			<ProductColors product={product} color={color} setColor={setColor} />
			<ProductButtons product={product} />
			<ManageActions
				toggleHandler={toggleHandler}
				deleteHandler={deleteHandler}
				duplicateHandler={duplicateHandler}
				place={place}
				edit={ADMIN_EDITS.PRODUCT(product.id)}
			/>
		</div>
	)
}

export default Product
