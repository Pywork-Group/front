'use client'

import '@/assets/styles/slider.scss'
import SearchField from '@/components/ui/common/form/search-field/SearchField'
import Heading from '@/components/ui/common/heading/Heading'
import { useSwiper } from '@/hooks/helpers/slider/useSwiper'
import cn from 'clsx'
import { useState, type FC } from 'react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './MainSlider.module.scss'
import { MAIN_SLIDER_DATA } from './data/main-slider.data'
import MainSliderItem from './item/MainSliderItem'
import MainSliderCards from './item/cards/MainSliderCards'
import HeaderContacts from '@/components/layout/header/contacts/HeaderContacts'

const MainSlider: FC = () => {
	const { setSwiper, setBeginning, setEnd, beginning, end, prev, next } =
		useSwiper()
	const [searchTerm, setSearchTerm] = useState('')

	return (
		<div className={styles.slider}>
			<SearchField
				className={styles.search}
				searchTerm={searchTerm}
				handleSearch={(e) => setSearchTerm(e.target.value)}
			/>
			<div className={styles.sliderInner}>
				<Swiper
					className={cn(styles.swiper, 'main-slider')}
					modules={[Pagination, EffectFade, Autoplay]}
					effect="fade"
					speed={800}
					autoplay={{
						delay: 5000,
					}}
					pagination={{
						clickable: true,
						clickableClass: styles.pagination,
						bulletClass: styles.bullet,
						bulletActiveClass: styles.bulletActive,
					}}
					onSwiper={(swiper) => setSwiper(swiper)}
					onSlideChange={({ isBeginning, isEnd }) => {
						setBeginning(isBeginning)
						setEnd(isEnd)
					}}
					slideVisibleClass={styles.pickedSlide}
				>
					{MAIN_SLIDER_DATA.items.map((item, index) => (
						<SwiperSlide key={index} className={styles.sliderItem}>
							<MainSliderItem
								number={index + 1}
								isBeginning={beginning}
								isEnd={end}
								prev={prev}
								next={next}
								item={item}
							/>
						</SwiperSlide>
					))}
				</Swiper>
				<div className={styles.right}>
					<Heading className={styles.mobileHeading}>УСЛУГИ</Heading>
					<MainSliderCards />
				</div>
			</div>
		</div>
	)
}

export default MainSlider
