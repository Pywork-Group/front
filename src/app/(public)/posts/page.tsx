import { PageType } from '@/__generated__/output'
import PostsScreen from '@/components/screens/posts/PostsScreen'
import { useSeo } from '@/hooks/public/seo/useSeo'

export async function generateMetadata() {
	const { seo, error } = await useSeo(PageType.Posts)

	if (!seo || error) return {}

	return {
		title: seo.title,
		description: seo.description,
	}
}

export default function PostsPage() {
	return <PostsScreen />
}
