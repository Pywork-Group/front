import { type FC } from 'react'
import styles from './MainSliderCards.module.scss'
import { MAIN_SLIDER_CARDS_DATA } from './data/main-slider-cards.data'
import MainSliderCard from './item/MainSliderCard'

const MainSliderCards: FC = () => {
	return (
		<ul className={styles.cards}>
			{MAIN_SLIDER_CARDS_DATA.items.map((card, index) => (
				<MainSliderCard card={card} key={index} />
			))}
		</ul>
	)
}

export default MainSliderCards
