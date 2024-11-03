import { useState } from 'react'
import { useSwiper as useSwiperSlider } from 'swiper/react'

export const useSwiper = () => {
	const [swiper, setSwiper] = useState(useSwiperSlider())
	const [beginning, setBeginning] = useState(true)
	const [end, setEnd] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(0)

	const next = () => {
		swiper.slideNext()
	}

	const prev = () => {
		swiper.slidePrev()
	}

	const goTo = (index: number) => {
		setCurrentIndex(index)
		swiper.slideTo(index)
	}

	return {
		swiper,
		setSwiper,
		beginning,
		setBeginning,
		end,
		setEnd,
		prev,
		next,
		currentIndex,
		setCurrentIndex,
		goTo,
	}
}
