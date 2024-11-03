import NotFoundPage from '@/app/not-found'
import PostSingle from '@/components/screens/post/PostSingle'
import { usePostSeo } from '@/hooks/public/seo/usePostSeo'
import type { IPageSlugParam } from '@/shared/interfaces/param/param.interface'

export async function generateMetadata({ params }: IPageSlugParam) {
	const { seo, error } = await usePostSeo(params.slug)

	if (!seo || error) return {}

	return {
		title: seo.title,
		description: seo.description,
	}
}

export default function PostPage({ params }: IPageSlugParam) {
	if (!params.slug) return <NotFoundPage />

	return <PostSingle slug={params.slug} />
}
