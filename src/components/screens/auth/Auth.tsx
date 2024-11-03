import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import type { FC } from 'react'
import styles from './Auth.module.scss'
import AuthForm from './form/AuthForm'

const Auth: FC = () => {
	return (
		<Section>
			<Container>
				<div className={styles.wrapper}>
					<AuthForm />
				</div>
			</Container>
		</Section>
	)
}

export default Auth
