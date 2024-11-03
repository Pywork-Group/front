'use client'

import { Sort, Status } from '@/__generated__/output'
import Container from '@/components/ui/common/container/Container'
import Heading from '@/components/ui/common/heading/Heading'
import Section from '@/components/ui/common/section/Section'
import { useReviews } from '@/hooks/public/review/useReviews'
import type { FC } from 'react'
import styles from './Reviews.module.scss'
import Review from './item/Review'

const Reviews: FC = () => {
	const { reviews } = useReviews({
		status: Status.Published,
		sort: Sort.Newest,
	})

	return (
		<Section>
			<Heading className={styles.mobileHeading}>ОТЗЫВЫ О НАС</Heading>
			<Container variant="sm">
				<div className={styles.reviews}>
					<Heading className={styles.heading}>Отзывы о нас</Heading>
					<ul className={styles.list}>
						{reviews.map((review, index) => (
							<Review key={index} review={review} place="public" />
						))}
					</ul>
				</div>
			</Container>
		</Section>
	)
}

export default Reviews
