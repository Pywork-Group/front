import {
	useHolidayByIdQuery,
	useUpdateHolidayMutation,
	type HolidayInput,
} from '@/__generated__/output'
import { ADMIN_PAGES } from '@/constants/url.constants'
import { getKeys } from '@/utils/helpers/get-keys.util'
import { useRouter } from 'next/navigation'
import { useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useManageHolidayEdit = (queryId: string) => {
	const {
		register: registerInput,
		control,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm<HolidayInput>({
		mode: 'onChange',
	})

	const { push } = useRouter()
	const holidayId = +queryId

	const { data } = useHolidayByIdQuery({
		variables: {
			id: holidayId,
		},
		fetchPolicy: 'no-cache',
		skip: !holidayId,
		onError: (error) => {
			toast.error(error.message)
		},
		onCompleted: ({ holidayById }) => {
			getKeys(holidayById).forEach(({ key, value }) => {
				setValue(key, value)
			})
		},
	})

	const [updateHoliday] = useUpdateHolidayMutation({
		fetchPolicy: 'no-cache',
		onCompleted: () => {
			push(ADMIN_PAGES.HOLIDAYS)
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const onSubmit: SubmitHandler<HolidayInput> = async (data) => {
		await updateHoliday({
			variables: {
				id: holidayId,
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
