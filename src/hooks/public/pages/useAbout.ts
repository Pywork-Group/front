import { useAboutQuery } from '@/__generated__/output'

export const useAbout = () => {
	const { data, loading } = useAboutQuery({
		fetchPolicy: 'no-cache',
	})

	return {
		about: data?.about || null,
		loading,
	}
}
