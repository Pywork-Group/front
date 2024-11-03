import type { IMenuItem } from '@/shared/interfaces/menu/menu.interface'
import Link from 'next/link'
import type { FC } from 'react'
import styles from '../../FooterContent.module.scss'

const FooterMenuItem: FC<{ item: IMenuItem }> = ({ item: { label, href } }) => {
	return (
		<li className={styles.item}>
			<Link href={href} className={styles.link}>
				{label}
			</Link>
		</li>
	)
}

export default FooterMenuItem
