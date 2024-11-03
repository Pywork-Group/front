'use client'

import { apolloClient } from '@/api/apollo/apollo.client'
import { IS_PRODUCTION } from '@/constants/global.constants'
import { ApolloProvider } from '@apollo/client'
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev'
import ReactToaster from './ReactToaster'

if (!IS_PRODUCTION) {
	loadDevMessages()
	loadErrorMessages()
}

export default function MainProvider({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<ApolloProvider client={apolloClient()}>
				{children}
				<ReactToaster />
			</ApolloProvider>
		</>
	)
}
