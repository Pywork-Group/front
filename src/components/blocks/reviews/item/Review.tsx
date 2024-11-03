import StaticImage from '@/components/ui/common/image/StaticImage'
import ManageActions from '@/components/ui/elements/manage/actions/ManageActions'
import { ADMIN_EDITS } from '@/constants/url.constants'
import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import type { IManageActions } from '@/shared/interfaces/manage/manage.interface'
import type { IReview } from '@/shared/interfaces/review/review.interface'
import cn from 'clsx'
import type { FC } from 'react'
import styles from '../Reviews.module.scss'

const Review: FC<IReview & IClassName & IManageActions> = ({
	review,
	deleteHandler,
	toggleHandler,
	duplicateHandler,
	place,
	className,
}) => {
	return (
		<li className={cn(styles.item, className && className)}>
			<StaticImage
				className={styles.photo}
				src={review.photo}
				width={190}
				height={190}
				alt={review.author}
			/>
			<StaticImage
				className={styles.brackets}
				src="/images/other/reviews/brackets.svg"
				width={47}
				height={21}
				alt="Скобки"
			/>
			<div
				className={styles.description}
				dangerouslySetInnerHTML={{ __html: review.content }}
			/>
			<h3 className={styles.name}>{review.author}</h3>
			<ManageActions
				toggleHandler={toggleHandler}
				deleteHandler={deleteHandler}
				duplicateHandler={duplicateHandler}
				place={place}
				edit={ADMIN_EDITS.REVIEW(review.id)}
			/>
		</li>
	)
}

export default Review
