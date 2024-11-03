export interface IMainSliderCardPopup {
	name: string
	content: string
	imagePath: string
	bottom: string
}

export interface IMainSliderCard {
	name: string
	imagePath: string
	imageWidth: number
	imageHeight: number
	popup: IMainSliderCardPopup
}

export interface IMainSliderCards {
	items: IMainSliderCard[]
}
