'use client'

import Container from '@/components/ui/common/container/Container'
import StaticImage from '@/components/ui/common/image/StaticImage'
import Section from '@/components/ui/common/section/Section'
import Loader from '@/components/ui/elements/loader/Loader'
import { useCurrentPost } from '@/hooks/public/post/useCurrentPost'
import { formatDate } from '@/utils/formats/other/format-date.util'
import { MoveLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import type { FC } from 'react'
import styles from './PostSingle.module.scss'

const PostSingle: FC<{ slug: string }> = ({ slug }) => {
	const { back } = useRouter()
	const { post, error, loading } = useCurrentPost(slug)

	if (error) return null

	return loading ? (
		<Loader />
	) : (
		post && (
			<Section>
				<Container variant="sm">
					<div className={styles.wrapper}>
						<button className={styles.back} onClick={back}>
							<MoveLeft /> ВЕРНУТЬСЯ
						</button>
						<div className={styles.poster}>
							<StaticImage
								src={post.bigPoster}
								width={1600}
								height={530}
								alt={post.name}
							/>
							<ul className={styles.terms}>
								{post.rubrics.map((rubric) => (
									<li className={styles.rubric}>{rubric.name}</li>
								))}
								<li className={styles.date}>{formatDate(post.createdAt)}</li>
							</ul>
						</div>
						<div
							className={styles.content}
							dangerouslySetInnerHTML={{ __html: post.description }}
						/>
					</div>
				</Container>
			</Section>
		)
	)
}

export default PostSingle
