//- React
import React from "react"

//- Next
import Image from "next/image"
import type { StaticImageData } from "next/image"

interface SneakerPropertiesProps {
	reference: string
	image: StaticImageData
}

export const lowerCaseNoSpaces = (string: string): string => string.toString().replace(new RegExp(/\s+/g), "").toLowerCase()

export default function SneakerProperties(props: SneakerPropertiesProps): React.JSX.Element {
	return (
		<section>
			<figure>
				<Image src={props.image} alt={props.reference} priority={true} />
				<figcaption>
					{props.reference}
				</figcaption>
			</figure>
		</section>
	)
}
