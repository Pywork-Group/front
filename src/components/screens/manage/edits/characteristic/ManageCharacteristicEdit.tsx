'use client'

import Container from '@/components/ui/common/container/Container'
import Button from '@/components/ui/common/form/button/Button'
import Field from '@/components/ui/common/form/field/Field'
import { REQUIRED_VALIDATION } from '@/components/ui/common/form/validations/form.validations'
import ReactSelect from '@/components/ui/common/selects/react-select/ReactSelect'
import { useManageCharacteristicEdit } from '@/hooks/manage/characteristics/useManageCharacteristicEdit'
import type { FC } from 'react'
import { Controller } from 'react-hook-form'
import globalStyles from '../ManageEdits.module.scss'
import styles from './ManageCharacteristicEdit.module.scss'
import { CHARACTERISTIC_TYPES_DATA } from '@/data/characteristic-types.data'

const ManageCharacteristicEdit: FC<{ queryId: string }> = ({ queryId }) => {
	const { registerInput, control, errors, data, handleSubmit, onSubmit } =
		useManageCharacteristicEdit(queryId)

	return (
		<div className={globalStyles.edit}>
			<Container>
				<div className={globalStyles.wrapper}>
					<h1 className={globalStyles.heading}>
						Редактирование - {data?.characteristicById.name || 'Характеристика'}
					</h1>
					<form className={globalStyles.form} onSubmit={handleSubmit(onSubmit)}>
						<Field
							{...registerInput('name', REQUIRED_VALIDATION('Имя'))}
							className={styles.field}
							label="Имя"
							error={errors.name}
						/>
						<Controller
							name="type"
							control={control}
							render={({ field, fieldState: { error } }) => (
								<ReactSelect
									field={field}
									options={CHARACTERISTIC_TYPES_DATA}
									label="Тип"
									error={error}
									className={styles.select}
								/>
							)}
							rules={REQUIRED_VALIDATION('Тип')}
						/>
						<Button buttonClassName={globalStyles.update} wrapperClassName={globalStyles.updateWrapper}>Обновить</Button>
					</form>
				</div>
			</Container>
		</div>
	)
}

export default ManageCharacteristicEdit
