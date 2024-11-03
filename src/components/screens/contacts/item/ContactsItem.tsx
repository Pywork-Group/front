import type { FC } from 'react'
import styles from '../Contacts.module.scss'
import type { IContactsItem } from '../interface/contacts.interface'

const ContactsItem: FC<{ item: IContactsItem }> = ({ item }) => {
	return (
		<li className={styles.item}>
			<div className={styles.circle}>{<item.icon />}</div>
			<h2 className={styles.name}>{item.name}</h2>
			<div
				className={styles.content}
				dangerouslySetInnerHTML={{ __html: item.content }}
			/>
		</li>
	)
}

export default ContactsItem
