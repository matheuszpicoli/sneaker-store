//- React
import React from "react"

//- Next
import Image from "next/image"

//- Images
import * as Photo from "../images/images"

type PhotoKey = keyof typeof Photo

export default function SneakerHighlight(): React.JSX.Element {
	const photoHighlights: PhotoKey[] = ["highlight1", "highlight2", "highlight3", "highlight4"]

	return (
		<React.Fragment>
			<aside className="sneaker-highlight">
				{photoHighlights.map((name, index) => (
					<Image
						key={index}
						className="highlight-photo"
						src={Photo[name]}
						alt={`Destaque ${index + 1}`}
						priority={true}
					/>
				))}
			</aside>
		</React.Fragment>
	)
}
