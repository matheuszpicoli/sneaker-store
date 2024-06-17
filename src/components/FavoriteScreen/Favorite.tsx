//- React
import React from "react"

//- Next
import Image from "next/image"
import type { StaticImageData } from "next/image"

//- Icons
import * as Icon from "@/icons/icons"

interface FavoriteProps {
	image: StaticImageData
	model: string
}

export default function Favorite(props: FavoriteProps): React.JSX.Element {
	return (
		<div className="favorite-screen-sneaker">
			<figure className="favorite-screen-sneaker-image-frame">
				<Image
					className="favorite-screen-sneaker-image"
					src={props.image}
					alt={props.model}
					priority={true}
				/>
				<figcaption className="favorite-screen-sneaker-image-description">{props.model}</figcaption>
			</figure>

			<div className="favorite-screen-sneaker-actions">
				<button type="button" className="go-to-purchase">
					Ir para<Icon.Arrow className="go-to-purchase-icon" />
				</button>
				<button type="button" className="remove-from-favorites">
					Remover<Icon.Trash className="remove-from-favorites-icon" />
				</button>
			</div>
		</div>
	)
}
