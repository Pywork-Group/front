import type { Metadata } from 'next'

import Favorites from '@/components/screens/favorites/Favorites'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { getServerSession } from '@/server/auth/get-server-session'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default async function FavoritesPage() {
	const user = await getServerSession()

	return <Favorites user={user} />
}
