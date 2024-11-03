import type { FC, PropsWithChildren } from 'react'
import type { ISection } from './interface/section.interface'

const Section: FC<PropsWithChildren<ISection>> = ({ children, className, id }) => {
	return <section className={className && className} id={id}>{children}</section>
}

export default Section
