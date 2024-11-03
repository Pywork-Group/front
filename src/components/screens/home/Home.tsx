import Advantages from '@/components/blocks/advantages/Advantages'
import Posts from '@/components/blocks/posts/Posts'
import PopularProducts from '@/components/blocks/products/PopularProducts'
import Products from '@/components/blocks/products/Products'
import Reviews from '@/components/blocks/reviews/Reviews'
import Slider from '@/components/blocks/slider/Slider'
import Tags from '@/components/blocks/tags/Tags'
import { getServerSession } from '@/server/auth/get-server-session'
import type { FC } from 'react'
import HomePostsBlock from './posts-block/HomePostsBlock'
import HomeReviewsBlock from './reviews-block/HomeReviewsBlock'

const Home: FC = async () => {
	const user = await getServerSession()

	return (
		<>
			<Slider />
			<Tags />
			<Advantages />
			<Products user={user} />
			<Reviews />
			<HomeReviewsBlock />
			<PopularProducts user={user} />
			<Posts />
			<HomePostsBlock />
		</>
	)
}

export default Home
