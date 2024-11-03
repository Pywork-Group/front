import StaticImage from '@/components/ui/common/image/StaticImage'
import type { IIsSessionUserAdmin } from '@/shared/interfaces/user/user.interface'
import { isNewest } from '@/utils/helpers/is-newest.util'
import type { FC } from 'react'
import styles from '../../Products.module.scss'
import type { IProductProps } from '../../interface/products.interface'
import ManageActions from '@/components/ui/elements/manage/actions/ManageActions'
import { ADMIN_EDITS } from '@/constants/url.constants'

const ProductTop: FC<IProductProps & IIsSessionUserAdmin> = ({
	product,
	isAdmin,
}) => {
	return (
		<div className={styles.top}>
			{isAdmin && (
				<ManageActions
					className={styles.edit}
					edit={ADMIN_EDITS.PRODUCT(product.id)}
					place="admin"
				/>
			)}
			{product.types.length > 0 && (
				<div className={styles.types}>
					{product.types.map((type, index) => (
						<div className={styles.type} key={index}>
							<StaticImage
								className="w-auto h-auto"
								src={type.iconPath}
								width={0}
								height={0}
								sizes="100vw"
								alt="Type"
							/>
						</div>
					))}
				</div>
			)}
			{product.oldPrice && <div className={styles.sale}>АКЦИЯ</div>}
			{isNewest(product.createdAt) && (
				<div className={styles.newest}>НОВИНКА</div>
			)}
		</div>
	)
}

export default ProductTop
