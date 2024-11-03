import { GRAPHQL_SERVER_URL } from '@/constants/global.constants'
import { HttpLink } from '@apollo/client'

export const httpLink = new HttpLink({
	uri: GRAPHQL_SERVER_URL,
	credentials: 'include',
})
