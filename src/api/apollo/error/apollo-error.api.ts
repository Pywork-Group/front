import { destroySession } from '@/server/auth/get-server-session'
import { onError } from '@apollo/client/link/error'

export const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		for (const { extensions, message } of graphQLErrors) {
			if (extensions?.code === 'UNAUTHENTICATED' && message === 'Logout') {
				destroySession().catch((error) => {
					console.log('Error destroying session:', error)
				})
			}
		}
	}
	if (networkError) console.log(`[Network error]: ${networkError}`)
	return
})
