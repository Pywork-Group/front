import Link from 'next/link'
import type { FC } from 'react'
import styles from '../ManageMenu.module.scss'
import type { IMenuItem } from '@/shared/interfaces/menu/menu.interface'

const ManageMenuItem: FC<{ item: IMenuItem }> = ({ item: { label, href } }) => {
	return (
		<li className={styles.item}>
			<Link className={styles.link} href={href}>
				{label}
			</Link>
		</li>
	)
}

export default ManageMenuItem
