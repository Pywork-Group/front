import StaticImage from '@/components/ui/common/image/StaticImage'
import ManageActions from '@/components/ui/elements/manage/actions/ManageActions'
import { ADMIN_EDITS, PUBLIC_PAGES } from '@/constants/url.constants'
import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import type { IManageActions } from '@/shared/interfaces/manage/manage.interface'
import type { TypeTag } from '@/shared/types/tag/tag.type'
import cn from 'clsx'
import Link from 'next/link'
import type { FC } from 'react'
import styles from '../Tags.module.scss'

const Tag: FC<TypeTag & IClassName & IManageActions> = ({
	deleteHandler,
	toggleHandler,
	duplicateHandler,
	place,
	tag,
	className,
}) => {
	return (
		<li className={cn(styles.item, className && className)}>
			<Link
				href={`${PUBLIC_PAGES.CATALOG}?tag=${tag.slug}`}
				className={styles.link}
			>
				<div className={styles.images}>
					<StaticImage
						className={styles.image}
						src={tag.imagePath}
						width={130}
						height={130}
						alt={tag.name}
					/>
					<StaticImage
						className={styles.balloons}
						src="/images/other/tags/balloons.png"
						width={130}
						height={130}
						alt="Шарики"
					/>
				</div>
				<h3 className={styles.name}>{tag.name}</h3>
			</Link>
			<ManageActions
				place={place}
				deleteHandler={deleteHandler}
				toggleHandler={toggleHandler}
				duplicateHandler={duplicateHandler}
				edit={ADMIN_EDITS.TAG(tag.id)}
			/>
		</li>
	)
}

export default Tag
