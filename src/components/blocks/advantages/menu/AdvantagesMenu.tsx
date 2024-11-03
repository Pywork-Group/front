import type { FC } from 'react'
import styles from '../Advantages.module.scss'
import { ADVANTAGES_MENU_DATA } from './data/advantages-menu.data'
import AdvantagesItem from './item/AdvantagesItem'

const AdvantagesMenu: FC = () => {
	return (
		<div className={styles.menu}>
			<h2 className={styles.menuName}>{ADVANTAGES_MENU_DATA.title}</h2>
			<ul className={styles.list}>
				{ADVANTAGES_MENU_DATA.items.map((item, index) => (
					<AdvantagesItem key={index} item={item} />
				))}
			</ul>
		</div>
	)
}

export default AdvantagesMenu
