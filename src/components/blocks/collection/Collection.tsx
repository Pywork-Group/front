import StaticImage from '@/components/ui/common/image/StaticImage'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import type { TypeCollection } from '@/shared/types/collection/collection.interface'
import cn from 'clsx'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './Collection.module.scss'

const Collection: FC<{ collection: TypeCollection } & IClassName> = ({
	collection,
	className,
}) => {
	return (
		<Link
			className={cn(styles.item, className && className)}
			href={`${PUBLIC_PAGES.CATALOG}?collection=${collection.slug}`}
		>
			<div className={styles.card}>
				<StaticImage
					className={styles.balloon}
					src="/images/data/slider/second/balloon.png"
					width={84}
					height={102}
					alt="Balloon"
				/>
				<StaticImage
					className={styles.mainImage}
					src={collection.imagePath}
					width={collection.imageWidth}
					height={collection.imageHeight}
					alt={collection.name}
				/>
				<StaticImage
					className={styles.decor}
					src="/images/data/slider/second/collections/decor.png"
					width={168}
					height={60}
					alt="Decor"
				/>
				<span className={styles.name}>{collection.name}</span>
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

export default Collection
