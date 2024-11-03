import NotFoundPage from '@/app/not-found'
import ProductSingle from '@/components/screens/product/ProductSingle'
import { useProductSeo } from '@/hooks/public/seo/useProductSeo'
import { getServerSession } from '@/server/auth/get-server-session'
import type { IPageSlugParam } from '@/shared/interfaces/param/param.interface'

export async function generateMetadata({ params }: IPageSlugParam) {
	const { seo, error } = await useProductSeo(params.slug)

	if (!seo || error) return {}

	return {
		title: seo.title,
		description: seo.description,
	}
}

export default async function ProductPage({ params }: IPageSlugParam) {
	if (!params.slug) return <NotFoundPage />

	const user = await getServerSession()

	return <ProductSingle slug={params.slug} user={user} />
}
