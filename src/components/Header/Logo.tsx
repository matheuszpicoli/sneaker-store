//- React
import React from "react"

export default function Logo(): React.JSX.Element {
	const returnToTop = (): void => window.scrollTo(0, 0)

	return (
		<div className="logo-area" onClick={returnToTop}>
			<h1 className="logo-title">
				<span className="emphasis-title-font">MP</span> Sneakers
			</h1>
		</div>
	)
}
