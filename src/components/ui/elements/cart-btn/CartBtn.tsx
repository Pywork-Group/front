'use client'

import CartWrapper from '@/components/layout/header/cart/wrapper/CartWrapper'
import { useToggleBodyOverflow } from '@/hooks/helpers/body/useToggleBodyOverflow'
import { useCartStore } from '@/store/cart-store'
import { useEffect, useState, type FC } from 'react'
import StaticImage from '../../common/image/StaticImage'
import type { ICartBtn } from './interface/cart-btn.interface'

const CartBtn: FC<ICartBtn> = ({ className }) => {
	const [isShow, setIsShow] = useState(false)
	const { length } = useCartStore()

	useEffect(() => {
		useToggleBodyOverflow(isShow)
	}, [isShow, useToggleBodyOverflow])

	return (
		<>
			<button
				className={className && className}
				onClick={() => setIsShow(true)}
			>
				<StaticImage
					src="/images/icons/basket.svg"
					width={30}
					height={30}
					alt="Basket"
				/>
				<span>{length()}</span>
				Корзина
			</button>
			{isShow && <CartWrapper closeCart={() => setIsShow(false)} />}
		</>
	)
}

export default CartBtn
