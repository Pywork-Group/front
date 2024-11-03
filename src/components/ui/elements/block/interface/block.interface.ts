import type { Block } from '@/__generated__/output'
import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import type { ApolloError } from '@apollo/client'

export interface IBlock extends IClassName {
	block: Block | null
	error?: ApolloError
	heading?: 'h1' | 'h2'
}
