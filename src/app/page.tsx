//- React
import React from "react"

//- Styles
import "../styles/index.scss"

//- Components
import SneakerHighlight from "@/components/SneakerHighlight"
import Masculine from "@/components/Masculine"
import Feminine from "@/components/Feminine"
import Teen from "@/components/Teen"
import Collections from "@/components/Collections"

export default function MPSneakers(): React.JSX.Element {
	return (
		<React.Fragment>
			<SneakerHighlight />
			<Masculine />
			<Feminine />
			<Teen />
			<Collections />
		</React.Fragment>
	)
}
