'use client'

import Container from '@/components/ui/common/container/Container'
import Button from '@/components/ui/common/form/button/Button'
import Field from '@/components/ui/common/form/field/Field'
import TextEditor from '@/components/ui/common/form/text-editor/TextEditor'
import { REQUIRED_VALIDATION } from '@/components/ui/common/form/validations/form.validations'
import { useManageForBuyersEdit } from '@/hooks/manage/pages/useManageForBuyersEdit'
import type { FC } from 'react'
import { Controller } from 'react-hook-form'
import globalStyles from '../ManageEdits.module.scss'
import styles from './ManageForBuyersEdit.module.scss'

const ManageForBuyersEdit: FC = () => {
	const { registerInput, control, errors, handleSubmit, onSubmit } =
		useManageForBuyersEdit()

	return (
		<div className={globalStyles.edit}>
			<Container>
				<div className={globalStyles.wrapper}>
					<h1 className={globalStyles.heading}>Покупателям</h1>
					<form className={globalStyles.form} onSubmit={handleSubmit(onSubmit)}>
						<Field
							{...registerInput('name', REQUIRED_VALIDATION('Название'))}
							className={styles.field}
							label="Название"
							error={errors.name}
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

export default ManageForBuyersEdit
