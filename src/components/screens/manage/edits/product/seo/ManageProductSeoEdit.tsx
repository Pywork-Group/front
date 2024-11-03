import Field from '@/components/ui/common/form/field/Field'
import type { FC } from 'react'
import globalStyles from '../../ManageEdits.module.scss'
import styles from '../ManageProductEdit.module.scss'
import type { IManageProductSeoEdit } from './interface/manage-product-seo-edit.interface'

const ManageProductSeoEdit: FC<IManageProductSeoEdit> = ({
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

export default ManageProductSeoEdit
