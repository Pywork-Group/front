import { useState } from 'react'

export const useSlider = (data: string[]) => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const next = () => {
		if (currentIndex !== data.length) {
			setCurrentIndex(currentIndex + 1)
		} else if (currentIndex === data.length) {
			setCurrentIndex(1)
		}
	}

	const prev = () => {
		if (currentIndex !== 1) {
			setCurrentIndex(currentIndex - 1)
		} else if (currentIndex === 1) {
			setCurrentIndex(data.length)
		}
	}

	const goTo = (index: number) => {
		setCurrentIndex(index)
	}

	return {
		prev,
		next,
		goTo,
		currentIndex,
		currentItem: data[currentIndex],
	}
}
