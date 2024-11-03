import StaticImage from '@/components/ui/common/image/StaticImage'
import ManageActions from '@/components/ui/elements/manage/actions/ManageActions'
import { ADMIN_EDITS, PUBLIC_PAGES } from '@/constants/url.constants'
import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import type { IManageActions } from '@/shared/interfaces/manage/manage.interface'
import type { IPost } from '@/shared/interfaces/post/post.interface'
import { formatDate } from '@/utils/formats/other/format-date.util'
import cn from 'clsx'
import Link from 'next/link'
import type { FC } from 'react'
import styles from '../Posts.module.scss'

const Post: FC<IPost & IManageActions & IClassName> = ({
	post,
	deleteHandler,
	toggleHandler,
	duplicateHandler,
	place,
	className,
}) => {
	return (
		<div className={cn(styles.item, className && className)}>
			<div className={styles.itemWrapper}>
				<Link className={styles.preview} href={PUBLIC_PAGES.POST(post.slug)}>
					<StaticImage
						src={post.poster}
						width={400}
						height={300}
						alt={post.name}
					/>
				</Link>
				<div className={styles.info}>
					<Link className={styles.fill} href={PUBLIC_PAGES.POST(post.slug)}>
						<ul className={styles.terms}>
							{post.rubrics.length > 0 && (
								<li className={styles.rubric}>{post.rubrics[0].name}</li>
							)}
							<li className={styles.date}>{formatDate(post.createdAt)}</li>
						</ul>
						<h3 className={styles.name}>{post.name}</h3>
						<div
							className={styles.description}
							dangerouslySetInnerHTML={{ __html: post.excerpt }}
						/>
					</Link>
					<Link href={`/post/${post.slug}`} className={styles.link}>
						Подробнее
					</Link>
				</div>
			</div>
			<ManageActions
				toggleHandler={toggleHandler}
				deleteHandler={deleteHandler}
				duplicateHandler={duplicateHandler}
				place={place}
				edit={ADMIN_EDITS.POST(post.id)}
			/>
		</div>
	)
}

export default Post
