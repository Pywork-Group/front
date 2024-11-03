import StaticImage from '@/components/ui/common/image/StaticImage'
import type { FC } from 'react'
import styles from '../../Advantages.module.scss'
import type { IAdvantagesItem } from '../interface/advantages-menu.interface'

const AdvantagesItem: FC<{ item: IAdvantagesItem }> = ({
	item: { name, description, image },
}) => {
	return (
		<li className={styles.item}>
			<StaticImage
				src={image.src}
				width={image.width}
				height={image.height}
				alt={image.alt}
			/>
			<h4 className={styles.itemName}>{name}</h4>
			<p className={styles.itemDescription}>{description}</p>
		</li>
	)
}

export default AdvantagesItem
