import StaticImage from '@/components/ui/common/image/StaticImage'
import type { FC } from 'react'
import styles from '../MainSlider.module.scss'
import type { IMainSliderItem } from './interface/main-slider-item.interface'

const MainSliderItem: FC<IMainSliderItem> = ({
	number,
	isBeginning,
	isEnd,
	prev,
	next,
	item,
}) => {
	return (
		<div className={styles.item}>
			<div className={styles.left}>
				<StaticImage
					className={styles.background}
					width={550}
					height={700}
					src="/images/other/slider/slider-bg.png"
					alt="Slider"
				/>
				<h2 className={styles.heading}>
					Студия аэродизайна
					<span>Ирины Майстровой</span>
				</h2>
				<div className={styles.box}>
					<div className={styles.preview}>
						<StaticImage
							width={item.width}
							height={item.height}
							src={item.imagePath}
							alt={item.name}
						/>
					</div>
					<h3 className={styles.text}>{item.name}</h3>
					<div className={styles.fill}>
						<span className={styles.number}>
							0<span>{number}</span>
						</span>
						<div className={styles.actions}>
							<button
								className={styles.prev}
								onClick={prev}
								disabled={isBeginning}
							>
								<StaticImage
									src="/images/icons/arrow-left.png"
									width={50}
									height={50}
									alt="Arrow left"
								/>
							</button>
							<button className={styles.next} onClick={next} disabled={isEnd}>
								<StaticImage
									src="/images/icons/arrow-right.png"
									width={50}
									height={50}
									alt="Arrow left"
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainSliderItem
