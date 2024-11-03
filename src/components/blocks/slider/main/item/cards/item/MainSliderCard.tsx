import StaticImage from '@/components/ui/common/image/StaticImage'
import Modal from '@/components/ui/templates/modal/Modal'
import { useState, type FC } from 'react'
import styles from '../MainSliderCards.module.scss'
import type { IMainSliderCard } from '../interface/main-slider-cards.interface'

const MainSliderCard: FC<{ card: IMainSliderCard }> = ({ card }) => {
	const [isShow, setIsShow] = useState(false)

	return (
		<>
			<li className={styles.card}>
				<div className={styles.cardInner}>
					<div className={styles.cardInfo}>
						<h4 className={styles.cardName}>{card.name}</h4>
						<button className={styles.cardLink} onClick={() => setIsShow(true)}>
							Подробнее
						</button>
					</div>
				</div>
				<StaticImage
					className={styles.cardImage}
					src={card.imagePath}
					width={card.imageWidth}
					height={card.imageHeight}
					alt={card.name}
				/>
			</li>
			{isShow && (
				<Modal className={styles.popup} closeModal={() => setIsShow(false)}>
					<div className={styles.wrapper}>
						<div className={styles.left}>
							<StaticImage
								src={card.popup.imagePath}
								width={600}
								height={600}
								alt={card.name}
							/>
							<div className={styles.leftFill}>
								<div className={styles.icon}>
									<StaticImage
										src="/images/other/slider/card-popup-icon.png"
										width={45}
										height={47}
										alt={card.name}
									/>
								</div>
							</div>
						</div>
						<div className={styles.right}>
							<h2 className={styles.title}>{card.popup.name}</h2>
							<div
								className={styles.text}
								dangerouslySetInnerHTML={{ __html: card.popup.content }}
							/>
							<div
								className={styles.bottom}
								dangerouslySetInnerHTML={{ __html: card.popup.bottom }}
							/>
						</div>
					</div>
				</Modal>
			)}
		</>
	)
}

export default MainSliderCard
