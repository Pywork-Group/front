'use client'

import { PageType } from '@/__generated__/output'
import Container from '@/components/ui/common/container/Container'
import Button from '@/components/ui/common/form/button/Button'
import { useManagePageEdit } from '@/hooks/manage/page/useManagePageEdit'
import type { IPageSearchParam } from '@/shared/interfaces/param/param.interface'
import type { FC } from 'react'
import globalStyles from '../ManageEdits.module.scss'
import ManagePageBlockEdit from './block/ManagePageBlockEdit'
import ManagePageSeoEdit from './seo/ManagePageSeoEdit'

const ManagePageEdit: FC<IPageSearchParam> = ({ searchParams }) => {
	const type = searchParams?.type ? String(searchParams.type) : PageType.Home
	const isHome = type === PageType.Home
	const isCatalog = type === PageType.Catalog

	const { registerInput, control, handleSubmit, onSubmit, errors } =
		useManagePageEdit(type as PageType)

	return (
		<div className={globalStyles.edit}>
			<Container>
				<div className={globalStyles.wrapper}>
					<h1 className={globalStyles.heading}>
						Редактирование -{' '}
						{isHome ? 'Главная' : isCatalog ? 'Каталог' : 'Посты'}
					</h1>
					<form className={globalStyles.form} onSubmit={handleSubmit(onSubmit)}>
						<ManagePageSeoEdit registerInput={registerInput} errors={errors} />
						<ManagePageBlockEdit
							type={type as PageType}
							registerInput={registerInput}
							control={control}
							errors={errors}
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

export default ManagePageEdit
