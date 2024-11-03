import Catalog from '@/components/screens/catalog/Catalog'
import { useCategorySeo } from '@/hooks/public/seo/useCategorySeo'
import { getServerSession } from '@/server/auth/get-server-session'
import type {
	IPageSearchParam,
	IPageSlugParam,
} from '@/shared/interfaces/param/param.interface'

export async function generateMetadata({ params }: IPageSlugParam) {
	const { seo, error } = await useCategorySeo(params.slug)

	if (!seo || error) return {}

	return {
		title: seo.title,
		description: seo.description,
	}
}

export default async function CategoryPage({
	searchParams,
	params,
}: IPageSearchParam & IPageSlugParam) {
	const user = await getServerSession()

	return <Catalog searchParams={searchParams} slug={params.slug} user={user} />
}
