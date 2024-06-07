//- React
import React from "react"

//- Styles
import "../styles/index.scss"

//- Components
import Header from "@/components/Header"
import SneakerHighlight from "@/components/SneakerHighlight"

export default function MPSneakers(): React.JSX.Element {
	return (
		<React.Fragment>
			<header>
				<Header />
			</header>
			<main>
				<SneakerHighlight />
			</main>
		</React.Fragment>
	)
}
