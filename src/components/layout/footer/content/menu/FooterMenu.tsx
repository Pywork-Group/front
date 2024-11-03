import type { FC } from 'react'
import styles from '../FooterContent.module.scss'
import type { IFooterMenu } from './interface/footer-menu.interface'
import FooterMenuItem from './item/FooterMenuItem'

const FooterMenu: FC<{ menu: IFooterMenu }> = ({ menu: { title, items } }) => {
	return (
		<div className={styles.col}>
			<h3 className={styles.title}>{title}</h3>
			<ul className={styles.list}>
				{items.map((item, index) => (
					<FooterMenuItem key={index} item={item} />
				))}
			</ul>
		</div>
	)
}

export default FooterMenu
