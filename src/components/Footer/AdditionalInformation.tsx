//- React
import React from "react"

//- Types
import type { IconType } from "react-icons"

interface AdditionalInformationProps {
	icon: IconType
	title: string
	subtitle: string
}

export default function AdditionalInformation(props: AdditionalInformationProps): React.JSX.Element {
	return (
		<div className="additional-information-item">
			<props.icon className="additional-information-icon" />
			<p className="additional-information-text-title">{props.title}</p>
			<p className="additional-information-text-subtitle">{props.subtitle}</p>
		</div>
	)
}
