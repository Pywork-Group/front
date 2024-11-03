import type { IMenuItem } from '@/shared/interfaces/menu/menu.interface'
import Link from 'next/link'
import type { FC } from 'react'
import styles from '../HeaderMenu.module.scss'

const HeaderMenuItem: FC<{ item: IMenuItem }> = ({ item: { href, label } }) => {
	return (
		<li className={styles.item}>
			<Link href={href} className={styles.link}>
				{label}
			</Link>
		</li>
	)
}

export default HeaderMenuItem
