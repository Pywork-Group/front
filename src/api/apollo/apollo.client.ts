import { IS_CLIENT, IS_DEVELOPMENT } from '@/constants/global.constants'
import { ApolloClient, ApolloLink, InMemoryCache, split } from '@apollo/client'
import { removeTypenameFromVariables } from '@apollo/client/link/remove-typename'
import { getMainDefinition } from '@apollo/client/utilities'
import { errorLink } from './error/apollo-error.api'
import { httpLink } from './links/apollo-http.api'
import { uploadLink } from './links/apollo-upload.api'

const removeTypenameLink = removeTypenameFromVariables()
const removeTypenameFromCache = { addTypename: false }

const clientApolloClient = new ApolloClient({
	link: split(
		(operation) => {
			const definition = getMainDefinition(operation.query)
			return (
				definition.kind === 'OperationDefinition' &&
				definition.operation === 'mutation' &&
				definition.selectionSet.selections.some(
					(field: any) => field.name.value === 'uploadFiles'
				)
			)
		},
		ApolloLink.from([removeTypenameLink, errorLink, uploadLink as any]),
		ApolloLink.from([removeTypenameLink, errorLink, httpLink])
	),
	cache: new InMemoryCache(removeTypenameFromCache),
	connectToDevTools: IS_DEVELOPMENT,
})

export const serverApolloClient = new ApolloClient({
	link: split(
		(operation) => {
			const definition = getMainDefinition(operation.query)
			return (
				definition.kind === 'OperationDefinition' &&
				definition.operation === 'mutation' &&
				definition.selectionSet.selections.some(
					(field: any) => field.name.value === 'uploadFiles'
				)
			)
		},
		ApolloLink.from([removeTypenameLink, uploadLink as any]),
		ApolloLink.from([removeTypenameLink, httpLink])
	),
	cache: new InMemoryCache(removeTypenameFromCache),
	ssrMode: true,
})

export function apolloClient() {
	return IS_CLIENT ? clientApolloClient : serverApolloClient
}
