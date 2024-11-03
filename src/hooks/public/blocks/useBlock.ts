import {
	BlockType,
	PageBlockDocument,
	type PageBlockQuery,
	type PageBlockQueryVariables,
} from '@/__generated__/output'
import { serverApolloClient } from '@/api/apollo/apollo.client'

export const useBlock = async (type: BlockType) => {
	const { data, error } = await serverApolloClient.query<
		PageBlockQuery,
		PageBlockQueryVariables
	>({
		fetchPolicy: 'no-cache',
		query: PageBlockDocument,
		variables: {
			type,
		},
	})

	return {
		block: data.pageBlock,
		error,
	}
}
