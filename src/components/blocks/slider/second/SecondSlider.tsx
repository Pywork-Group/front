'use client'

import { useSwiper } from '@/hooks/helpers/slider/useSwiper'
import type { FC } from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import CollectionSlider from '../collection/CollectionSlider'
import HolidaySlider from '../holiday/HolidaySlider'
import styles from './SecondSlider.module.scss'

const SecondSlider: FC = () => {
	const { setSwiper, setBeginning, setEnd } = useSwiper()

	return (
		<div className={styles.slider}>
			<Swiper
				className={styles.swiper}
				modules={[Pagination]}
				spaceBetween={0}
				slidesPerView={1}
				slidesPerGroup={1}
				pagination={{
					clickable: true,
					bulletClass: styles.bullet,
					bulletActiveClass: styles.bulletActive,
					el: '#secondBullets',
					type: 'bullets',
				}}
				speed={800}
				onSwiper={(swiper) => setSwiper(swiper)}
				onSlideChange={({ isBeginning, isEnd }) => {
					setBeginning(isBeginning)
					setEnd(isEnd)
				}}
			>
				<SwiperSlide>
					<HolidaySlider />
				</SwiperSlide>
				<SwiperSlide>
					<CollectionSlider />
				</SwiperSlide>
			</Swiper>
			<div id="secondBullets" className={styles.dots}></div>
		</div>
	)
}

export default SecondSlider
