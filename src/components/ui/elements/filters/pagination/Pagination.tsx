'use client'

import { usePagination } from '@/hooks/helpers/pagination/usePagination'
import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import cn from 'clsx'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { FC } from 'react'
import styles from './Pagination.module.scss'
import type { IPagination } from './interface/pagination.interface'

const Pagination: FC<IPagination & IClassName> = ({
	length,
	page,
	perPage,
	setPagination,
	className,
}) => {
	const { goToPreviousPage, goToNextPage, goToPage } = usePagination(
		page,
		length,
		setPagination
	)

	const totalPages = Math.ceil(length / perPage)
	const visiblePages = 5

	const getDisplayedPages = (
		currentPage: number,
		totalPages: number,
		visiblePages: number
	) => {
		const pages = []
		let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2))
		let endPage = Math.min(
			totalPages,
			currentPage + Math.floor(visiblePages / 2)
		)

		if (currentPage > 1 && startPage > 1) {
			pages.push('. . .')
		}

		for (let i = startPage; i <= endPage; i++) {
			pages.push(i)
		}

		if (currentPage < totalPages && endPage < totalPages) {
			pages.push('. . .')
		}

		return pages
	}

	const displayedPages = getDisplayedPages(page, totalPages, visiblePages)

	return (
		<div className={cn(styles.pagination, className && className)}>
			<button
				className={styles.button}
				onClick={goToPreviousPage}
				disabled={page <= 1}
				type="button"
			>
				<ChevronLeft />
			</button>
			{displayedPages.map((p, idx) => {
				if (typeof p === 'number') {
					return (
						<button
							key={idx}
							className={cn(styles.number, {
								[styles.picked]: page === p,
							})}
							onClick={() => goToPage(p)}
							type="button"
						>
							{p}
						</button>
					)
				}
				return (
					<div key={idx} className={styles.pin}>
						{p}
					</div>
				)
			})}
			<button
				className={styles.button}
				onClick={goToNextPage}
				disabled={page >= totalPages}
				type="button"
			>
				<ChevronRight />
			</button>
		</div>
	)
}

export default Pagination
