import Fixed from '@/components/layout/fixed/Fixed'
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import type { PropsWithChildren } from 'react'

export default function PublicLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<>
			<Header />
			{children}
			<Fixed />
			<Footer />
		</>
	)
}
