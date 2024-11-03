'use client'

import Container from '@/components/ui/common/container/Container'
import Button from '@/components/ui/common/form/button/Button'
import Field from '@/components/ui/common/form/field/Field'
import TextEditor from '@/components/ui/common/form/text-editor/TextEditor'
import UploadField from '@/components/ui/common/form/upload-field/UploadField'
import { REQUIRED_VALIDATION } from '@/components/ui/common/form/validations/form.validations'
import { useManageReviewEdit } from '@/hooks/manage/reviews/useManageReviewEdit'
import type { FC } from 'react'
import { Controller } from 'react-hook-form'
import globalStyles from '../ManageEdits.module.scss'
import styles from './ManageReviewEdit.module.scss'

const ManageReviewEdit: FC<{ queryId: string }> = ({ queryId }) => {
	const { registerInput, errors, control, handleSubmit, onSubmit } =
		useManageReviewEdit(queryId)

	return (
		<div className={globalStyles.edit}>
			<Container>
				<div className={globalStyles.wrapper}>
					<h1 className={globalStyles.heading}>Редактирование - Отзыв</h1>
					<form className={globalStyles.form} onSubmit={handleSubmit(onSubmit)}>
						<Field
							{...registerInput('author', REQUIRED_VALIDATION('Автор'))}
							className={styles.field}
							label="Автор"
							error={errors.author}
						/>
						<Controller
							name="photo"
							control={control}
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<UploadField
									className={styles.upload}
									onChange={onChange}
									value={value}
									error={error}
									placeholder="Выбрать картинку"
									label="Картинка"
								/>
							)}
							rules={REQUIRED_VALIDATION('Картинка')}
						/>
						<Controller
							name="content"
							control={control}
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<TextEditor
									className={styles.editor}
									onChange={onChange}
									error={error}
									value={value}
									label="Отзыв"
								/>
							)}
							rules={REQUIRED_VALIDATION('Отзыв')}
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

export default ManageReviewEdit
