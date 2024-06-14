//- React
import React from "react"

//- Types
import type { IconType } from "react-icons"

interface SocialMediaProps {
	icon: IconType
}

export default function SocialMedia(props: SocialMediaProps): React.JSX.Element {
	return (
		<div className="social-media">
			<props.icon className="social-media-icon" />
		</div>
	)
}
