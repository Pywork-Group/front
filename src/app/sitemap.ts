import { SITE_URL } from '@/constants/seo.constants'
import { useSitemap } from '@/hooks/public/sitemap/useSitemap'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const { categories, products, posts, error } = await useSitemap()

	if (error) return []

	const productsSitemap = products.map((slug) => ({
		url: `${SITE_URL}/product/${slug}`,
	}))

	const postsSitemap = posts.map((slug) => ({
		url: `${SITE_URL}/post/${slug}`,
	}))

	const categoriesSitemap = categories.map((slug) => ({
		url: `${SITE_URL}/category/${slug}`,
	}))

	const pagesSitemap = [
		{ url: `${SITE_URL}` },
		{ url: `${SITE_URL}/about` },
		{ url: `${SITE_URL}/catalog` },
		{ url: `${SITE_URL}/contacts` },
		{ url: `${SITE_URL}/for-buyers` },
		{ url: `${SITE_URL}/posts` },
		{ url: `${SITE_URL}/shipping-and-payment` },
	]

	return [
		...productsSitemap,
		...postsSitemap,
		...categoriesSitemap,
		...pagesSitemap,
	]
}
