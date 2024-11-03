'use client'

import { PUBLIC_PAGES } from '@/constants/url.constants'
import type { IMenu } from '@/shared/interfaces/menu/menu.interface'
import { AlignJustify } from 'lucide-react'
import Link from 'next/link'
import { useState, type FC } from 'react'
import SearchField from '../../common/form/search-field/SearchField'
import styles from './Breadcrumb.module.scss'

const Breadcrumb: FC<IMenu> = ({ items }) => {
	const [searchTerm, setSearchTerm] = useState('')

	return (
		<div className={styles.breadcrumb}>
			<Link href={PUBLIC_PAGES.CATALOG} className={styles.catalog}>
				<AlignJustify />
				КАТАЛОГ ТОВАРОВ
			</Link>
			<div className={styles.fill}>
				<ul className={styles.list}>
					<li className={styles.item}>
						<Link href={PUBLIC_PAGES.HOME} className={styles.link}>
							Главная
						</Link>
					</li>
					{items.map((item, index) => (
						<li className={styles.item} key={index}>
							{index === items.length - 1 ? (
								<span className={styles.link}>{item.label}</span>
							) : (
								<Link href={item.href} className={styles.link}>
									{item.label}
								</Link>
							)}
						</li>
					))}
				</ul>
				<SearchField
					wrapperClassName={styles.search}
					inputClassName={styles.input}
					searchTerm={searchTerm}
					handleSearch={(e) => setSearchTerm(e.target.value)}
					placeholder="Искать товар"
				/>
			</div>
		</div>
	)
}

export default Breadcrumb
