'use client'

import StaticImage from '@/components/ui/common/image/StaticImage'
import { useSwiper } from '@/hooks/helpers/slider/useSwiper'
import type { FC } from 'react'
import 'swiper/css/grid'
import { Autoplay, Grid, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Collection from '../../collection/Collection'
import styles from './CollectionSlider.module.scss'
import { COLLECTIONS_DATA } from './data/collections.data'

const CollectionSlider: FC = () => {
	const { setSwiper, setBeginning, setEnd, beginning, end, prev, next } =
		useSwiper()

	return (
		<div className={styles.slider}>
			<div className={styles.title}>
				<StaticImage
					src="/images/other/slider/collection-title.png"
					width={30}
					height={30}
					alt="ТОВАРЫ К ПРАЗДНИКАМ"
				/>
				КОЛЛЕКЦИИ
			</div>
			<div className={styles.fill}>
				<div className={styles.actions}>
					<button className={styles.prev} onClick={prev} disabled={beginning}>
						<span>вверх</span>
						<StaticImage
							src="/images/icons/arrow-up.png"
							width={25}
							height={53}
							alt="Arrow left"
						/>
					</button>
					<button className={styles.next} onClick={next} disabled={end}>
						<span>вниз</span>
						<StaticImage
							src="/images/icons/arrow-down.png"
							width={25}
							height={53}
							alt="Arrow left"
						/>
					</button>
				</div>
				<Swiper
					className={styles.swiper}
					modules={[Grid, Pagination, Autoplay]}
					// autoplay={{
					// 	delay: 5000,
					// }}
					spaceBetween={0}
					slidesPerView={4}
					slidesPerGroup={4}
					pagination={{
						clickable: true,
						bulletClass: styles.bullet,
						bulletActiveClass: styles.bulletActive,
						el: '#holidayBullets',
						type: 'bullets',
					}}
					speed={800}
					onSwiper={(swiper) => setSwiper(swiper)}
					onSlideChange={({ isBeginning, isEnd }) => {
						setBeginning(isBeginning)
						setEnd(isEnd)
					}}
					direction="vertical"
					breakpoints={{
						1700: {
							slidesPerView: 4,
							slidesPerGroup: 4,
						},
						1600: {
							slidesPerView: 2,
							slidesPerGroup: 2,
							grid: {
								rows: 4,
								fill: 'column',
							},
						},
						1050: {
							slidesPerView: 2,
							slidesPerGroup: 2,
							grid: {
								rows: 3,
								fill: 'column',
							},
						},
						700: {
							slidesPerView: 2,
							slidesPerGroup: 2,
							grid: {
								rows: 3,
								fill: 'column',
							},
						},
						600: {
							slidesPerView: 2,
							slidesPerGroup: 2,
							grid: {
								rows: 2,
								fill: 'column',
							},
						},
						0: {
							slidesPerView: 2,
							slidesPerGroup: 2,
							grid: {
								rows: 1,
								fill: 'column',
							},
						},
					}}
				>
					{COLLECTIONS_DATA.map((collection, index) => (
						<SwiperSlide key={index} className={styles.collection}>
							<Collection collection={collection} />
						</SwiperSlide>
					))}
				</Swiper>
				<div id="holidayBullets" className={styles.dots}></div>
			</div>
		</div>
	)
}

export default CollectionSlider
