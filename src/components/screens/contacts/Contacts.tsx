import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import type { FC } from 'react'
import styles from './Contacts.module.scss'
import { CONTACTS_DATA } from './data/contacts.data'
import ContactsItem from './item/ContactsItem'

const Contacts: FC = () => {
	return (
		<Section>
			<Container variant="smallest">
				<div className={styles.wrapper}>
					<h1 className={styles.heading}>Контакты</h1>
					<ul className={styles.list}>
						{CONTACTS_DATA.items.map((item, index) => (
							<ContactsItem key={index} item={item} />
						))}
					</ul>
				</div>
			</Container>
		</Section>
	)
}

export default Contacts
