import StaticImage from '@/components/ui/common/image/StaticImage'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import type { TypeHoliday } from '@/shared/types/holiday/holiday.type'
import cn from 'clsx'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './Holiday.module.scss'

const Holiday: FC<{ holiday: TypeHoliday } & IClassName> = ({
	holiday,
	className,
}) => {
	return (
		<Link
			className={cn(styles.item, className && className)}
			href={`${PUBLIC_PAGES.CATALOG}?holiday=${holiday.slug}`}
		>
			<div className={styles.card}>
				<StaticImage
					className={styles.leftBalloon}
					src="/images/data/slider/second/balloon.png"
					width={84}
					height={102}
					alt="Balloon"
				/>
				{holiday.rightImage && (
					<StaticImage
						className={styles.rightBalloon}
						src={holiday.rightImage}
						width={holiday.rightWidth}
						height={holiday.rightHeight}
						alt="Balloon"
					/>
				)}
				<StaticImage
					className={styles.tree}
					src={holiday.imagePath}
					width={holiday.imageWidth}
					height={holiday.imageHeight}
					alt="Tree"
				/>
				<StaticImage
					className={styles.decor}
					src={holiday.decorPath}
					width={holiday.decorWidth}
					height={holiday.decorHeight}
					alt="Decor"
				/>
				<span className={styles.name}>{holiday.name}</span>
			</div>
			<div className={styles.link}>
				В каталог
				<div>
					<StaticImage
						src="/images/icons/chevron-right.png"
						width={11}
						height={11}
						alt="Arrow"
					/>
				</div>
			</div>
		</Link>
	)
}

export default Holiday
