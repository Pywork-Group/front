'use client'

import StaticImage from '@/components/ui/common/image/StaticImage'
import CartBtn from '@/components/ui/elements/cart-btn/CartBtn'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import { useFavoritesStore } from '@/store/favorites-store'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState, type FC } from 'react'
import Burger from '../burger/Burger'
import styles from './HeaderButtons.module.scss'

const HeaderButtons: FC = () => {
	const [isShow, setIsShow] = useState(false)
	const [isHydrated, setIsHydrated] = useState(false)
	const { length } = useFavoritesStore()

	useEffect(() => {
		setIsHydrated(true)
	}, [])

	return (
		<ul className={styles.list}>
			{isHydrated && (
				<li className={styles.item}>
					<Link className={styles.favorites} href={PUBLIC_PAGES.FAVORITES}>
						<StaticImage
							src="/images/icons/favorites.svg"
							width={34}
							height={34}
							alt="Favorites"
						/>
						Избранное
						{length() > 0 && <span>{length()}</span>}
					</Link>
				</li>
			)}
			<li className={styles.item}>
				{isHydrated && <CartBtn className={styles.cart} />}
			</li>
			<li className={styles.item}>
				<button className={styles.burger} onClick={() => setIsShow(true)}>
					<Menu />
				</button>
				{isShow && <Burger close={() => setIsShow(false)} />}
			</li>
		</ul>
	)
}

export default HeaderButtons
