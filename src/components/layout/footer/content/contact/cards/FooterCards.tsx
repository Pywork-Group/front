import type { FC } from 'react'
import styles from '../../FooterContent.module.scss'
import { FOOTER_CARDS_DATA } from './data/footer-cards.data'
import FooterCard from './item/FooterCard'

const FooterCards: FC = () => {
	return (
		<ul className={styles.cards}>
			{FOOTER_CARDS_DATA.map((card, index) => (
				<FooterCard key={index} card={card} />
			))}
		</ul>
	)
}

export default FooterCards
