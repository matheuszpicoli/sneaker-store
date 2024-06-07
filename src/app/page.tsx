//- React
import React from "react"

//- Next
import Head from "next/head"

//- Styles
import "../styles/index.scss"

//- Components
import SneakerHighlight from "@/components/SneakerHighlight"
import Section from "@/components/Section"

export default function MPSneakers(): React.JSX.Element {
	return (
		<React.Fragment>
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
			</Head>
			<SneakerHighlight />
			<Section reference="masculine" />
			<Section reference="feminine" />
			<Section reference="teens" />
			<Section reference="collections" />
		</React.Fragment>
	)
}
