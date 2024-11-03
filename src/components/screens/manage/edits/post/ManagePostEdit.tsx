'use client'

import Container from '@/components/ui/common/container/Container'
import Button from '@/components/ui/common/form/button/Button'
import Field from '@/components/ui/common/form/field/Field'
import TextEditor from '@/components/ui/common/form/text-editor/TextEditor'
import UploadField from '@/components/ui/common/form/upload-field/UploadField'
import { REQUIRED_VALIDATION } from '@/components/ui/common/form/validations/form.validations'
import ReactSelect from '@/components/ui/common/selects/react-select/ReactSelect'
import { useManagePostEdit } from '@/hooks/manage/posts/useManagePostEdit'
import { useManageSelectRubrics } from '@/hooks/manage/rubrics/useManageSelectRubrics'
import type { FC } from 'react'
import { Controller } from 'react-hook-form'
import globalStyles from '../ManageEdits.module.scss'
import styles from './ManagePostEdit.module.scss'

const ManagePostEdit: FC<{ queryId: string }> = ({ queryId }) => {
	const { registerInput, control, errors, data, handleSubmit, onSubmit } =
		useManagePostEdit(queryId)
	const { rubrics } = useManageSelectRubrics()

	return (
		<div className={globalStyles.edit}>
			<Container>
				<div className={globalStyles.wrapper}>
					<h1 className={globalStyles.heading}>
						Редактирование - {data?.postById.name || 'Пост'}
					</h1>
					<form className={globalStyles.form} onSubmit={handleSubmit(onSubmit)}>
						<Field
							{...registerInput('name', REQUIRED_VALIDATION('Имя'))}
							className={styles.field}
							label="Имя"
							error={errors.name}
						/>
						<Controller
							name="rubrics"
							control={control}
							render={({ field, fieldState: { error } }) => (
								<ReactSelect
									field={field}
									options={rubrics || []}
									label="Рубрики (Не обязательно)"
									error={error}
									className={styles.select}
									isMulti
								/>
							)}
						/>
						<Controller
							name="poster"
							control={control}
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<UploadField
									className={styles.upload}
									onChange={onChange}
									value={value}
									error={error}
									label="Постер"
								/>
							)}
							rules={REQUIRED_VALIDATION('Постер')}
						/>
						<Controller
							name="bigPoster"
							control={control}
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<UploadField
									className={styles.upload}
									onChange={onChange}
									value={value}
									error={error}
									label="Большой Постер"
								/>
							)}
							rules={REQUIRED_VALIDATION('Постер')}
						/>
						<Controller
							name="excerpt"
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
									label="Краткое Описание"
								/>
							)}
							rules={REQUIRED_VALIDATION('Краткое Описание')}
						/>
						<Controller
							name="description"
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
									label="Описание"
								/>
							)}
							rules={REQUIRED_VALIDATION('Описание')}
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

export default ManagePostEdit
