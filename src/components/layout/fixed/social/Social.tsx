import type { FC } from 'react'
import styles from './Social.module.scss'
import { SOCIAL_DATA } from './data/social.data'
import SocialItem from './item/SocialItem'

const Social: FC = () => {
	return (
		<ul className={styles.list}>
			{SOCIAL_DATA.items.map((item, index) => (
				<SocialItem key={index} item={item} />
			))}
		</ul>
	)
}

export default Social
