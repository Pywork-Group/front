'use client'

import { Sort, Status } from '@/__generated__/output'
import Post from '@/components/blocks/posts/item/Post'
import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import Pagination from '@/components/ui/elements/filters/pagination/Pagination'
import { usePosts } from '@/hooks/public/post/usePosts'
import { useState, type FC } from 'react'
import styles from './PostsScreen.module.scss'

const PostsScreen: FC = () => {
	const pagination = {
		page: '1',
		perPage: '16',
	}
	const [postsQuery, setPostsQuery] = useState(pagination)
	const { posts, count } = usePosts({
		sort: Sort.Newest,
		status: Status.Published,
		...postsQuery,
	})

	return (
		<Section>
			<Container>
				<div className={styles.wrapper}>
					<h1 className={styles.heading}>Все статьи</h1>
					{count > 0 && (
						<>
							<div className={styles.list}>
								{posts.map((post, index) => (
									<Post
										key={index}
										post={post}
										place="public"
										className={styles.item}
									/>
								))}
							</div>
							{count > +postsQuery.perPage && (
								<Pagination
									length={count}
									page={+postsQuery.page}
									perPage={+postsQuery.perPage}
									setPagination={setPostsQuery}
									className={styles.pagination}
								/>
							)}
						</>
					)}
				</div>
			</Container>
		</Section>
	)
}

export default PostsScreen
