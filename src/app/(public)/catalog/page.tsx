import { PageType } from '@/__generated__/output'
import Catalog from '@/components/screens/catalog/Catalog'
import { useSeo } from '@/hooks/public/seo/useSeo'
import { getServerSession } from '@/server/auth/get-server-session'
import type { IPageSearchParam } from '@/shared/interfaces/param/param.interface'

export async function generateMetadata() {
	const { seo, error } = await useSeo(PageType.Catalog)

	if (!seo || error) return {}

	return {
		title: seo.title,
		description: seo.description,
	}
}

export default async function CatalogPage({ searchParams }: IPageSearchParam) {
	const user = await getServerSession()

	return <Catalog searchParams={searchParams} user={user} />
}
