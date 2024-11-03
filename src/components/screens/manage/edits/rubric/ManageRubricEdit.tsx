'use client'

import Container from '@/components/ui/common/container/Container'
import Button from '@/components/ui/common/form/button/Button'
import Field from '@/components/ui/common/form/field/Field'
import { REQUIRED_VALIDATION } from '@/components/ui/common/form/validations/form.validations'
import { useManageRubricEdit } from '@/hooks/manage/rubrics/useManageRubricEdit'
import type { FC } from 'react'
import globalStyles from '../ManageEdits.module.scss'

const ManageRubricEdit: FC<{ queryId: string }> = ({ queryId }) => {
	const { registerInput, errors, data, handleSubmit, onSubmit } =
		useManageRubricEdit(queryId)

	return (
		<div className={globalStyles.edit}>
			<Container>
				<div className={globalStyles.wrapper}>
					<h1 className={globalStyles.heading}>
						Редактирование - {data?.rubricById.name || 'Рубрика'}
					</h1>
					<form className={globalStyles.form} onSubmit={handleSubmit(onSubmit)}>
						<Field
							{...registerInput('name', REQUIRED_VALIDATION('Имя'))}
							label="Имя"
							error={errors.name}
						/>
						<Button
							buttonClassName={globalStyles.update}
							wrapperClassName={globalStyles.updateWrapper}
						>
							Обновить
						</Button>
					</form>
				</div>
			</Container>
		</div>
	)
}

export default ManageRubricEdit
