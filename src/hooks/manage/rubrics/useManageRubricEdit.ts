import {
	useRubricByIdQuery,
	useUpdateRubricMutation,
	type RubricInput,
} from '@/__generated__/output'
import { ADMIN_PAGES } from '@/constants/url.constants'
import { getKeys } from '@/utils/helpers/get-keys.util'
import { useRouter } from 'next/navigation'
import { useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useManageRubricEdit = (queryId: string) => {
	const {
		register: registerInput,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm<RubricInput>({
		mode: 'onChange',
	})

	const { push } = useRouter()
	const rubricId = +queryId

	const { data } = useRubricByIdQuery({
		variables: {
			id: rubricId,
		},
		fetchPolicy: 'no-cache',
		skip: !rubricId,
		onError: (error) => {
			toast.error(error.message)
		},
		onCompleted: ({ rubricById }) => {
			getKeys(rubricById).forEach(({ key, value }) => {
				setValue(key, value)
			})
		},
	})

	const [updateRubric] = useUpdateRubricMutation({
		fetchPolicy: 'no-cache',
		onCompleted: () => {
			push(ADMIN_PAGES.RUBRICS)
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const onSubmit: SubmitHandler<RubricInput> = async (data) => {
		await updateRubric({
			variables: {
				id: rubricId,
				data,
			},
		})
	}

	return { registerInput, errors, handleSubmit, onSubmit, data }
}
