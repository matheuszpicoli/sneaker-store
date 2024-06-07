//- React
import React from "react"

//- Styles
import "../styles/index.scss"

//- Components
import SneakerHighlight from "@/components/SneakerHighlight"
import Section from "@/components/Section"

export default function MPSneakers(): React.JSX.Element {
	return (
		<React.Fragment>
			<SneakerHighlight />
			<Section reference="masculine" />
			<Section reference="feminine" />
			<Section reference="teens" />
			<Section reference="collections" />
		</React.Fragment>
	)
}
