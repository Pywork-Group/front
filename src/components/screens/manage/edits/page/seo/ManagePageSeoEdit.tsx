import Field from '@/components/ui/common/form/field/Field'
import type { FC } from 'react'
import globalStyles from '../../ManageEdits.module.scss'
import styles from '../ManagePageEdit.module.scss'
import type { IManagePageSeoEdit } from './interface/manage-page-seo-edit.interface'

const ManagePageSeoEdit: FC<IManagePageSeoEdit> = ({
	registerInput,
	errors,
}) => {
	return (
		<div className={styles.seo}>
			<h2 className={globalStyles.subHeading}>СЕО</h2>
			<div className={globalStyles.fill}>
				<Field
					{...registerInput('seo.title')}
					className={globalStyles.generalField}
					label="Название"
					error={errors.seo?.title}
				/>
				<Field
					{...registerInput('seo.description')}
					className={globalStyles.generalField}
					label="Описание"
					error={errors.seo?.description}
				/>
			</div>
		</div>
	)
}

export default ManagePageSeoEdit
