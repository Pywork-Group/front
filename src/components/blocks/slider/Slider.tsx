import Link from 'next/link'
import type { FC } from 'react'
import styles from './Slider.module.scss'
import MainSlider from './main/MainSlider'
import SecondSlider from './second/SecondSlider'

const Slider: FC = () => {
	return (
		<div className={styles.sliders}>
			<MainSlider />
			<SecondSlider />
			<Link className={styles.catalog} href="/catalog">
				<span className={styles.catalogIcon}>
					<span></span>
					<span></span>
					<span></span>
				</span>
				<span>КАТАЛОГ ТОВАРОВ</span>
			</Link>
		</div>
	)
}

export default Slider
