import { PageType } from '@/__generated__/output'
import Home from '@/components/screens/home/Home'
import { useSeo } from '@/hooks/public/seo/useSeo'

export async function generateMetadata() {
	const { seo, error } = await useSeo(PageType.Home)

	if (!seo || error) return {}

	return {
		title: seo.title,
		description: seo.description,
	}
}

export default function HomePage() {
	return <Home />
}
