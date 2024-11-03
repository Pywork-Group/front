import {
	useCollectionByIdQuery,
	useUpdateCollectionMutation,
	type CollectionInput,
} from '@/__generated__/output'
import { ADMIN_PAGES } from '@/constants/url.constants'
import { getKeys } from '@/utils/helpers/get-keys.util'
import { useRouter } from 'next/navigation'
import { useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useManageCollectionEdit = (queryId: string) => {
	const {
		register: registerInput,
		control,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm<CollectionInput>({
		mode: 'onChange',
	})

	const { push } = useRouter()
	const collectionId = +queryId

	const { data } = useCollectionByIdQuery({
		variables: {
			id: collectionId,
		},
		fetchPolicy: 'no-cache',
		skip: !collectionId,
		onError: (error) => {
			toast.error(error.message)
		},
		onCompleted: ({ collectionById }) => {
			getKeys(collectionById).forEach(({ key, value }) => {
				setValue(key, value)
			})
		},
	})

	const [updateCollection] = useUpdateCollectionMutation({
		fetchPolicy: 'no-cache',
		onCompleted: () => {
			push(ADMIN_PAGES.COLLECTIONS)
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const onSubmit: SubmitHandler<CollectionInput> = async (data) => {
		await updateCollection({
			variables: {
				id: collectionId,
				data,
			},
		})
	}

	return {
		registerInput,
		control,
		errors,
		handleSubmit,
		onSubmit,
		data,
	}
}
