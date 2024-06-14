//- React
import React from "react"

interface FilterProps {
	category: string,
	children: React.ReactNode
}

export default function Filter(props: FilterProps): React.JSX.Element {
	return (
		<section className="filter-section">
			<p className="filter-category">{props.category}</p>
			<div className="filter-options">
				{props.children}
			</div>
		</section>
	)
}
