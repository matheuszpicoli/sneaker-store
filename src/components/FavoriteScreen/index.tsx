//- React
import React from "react"

//- Icons
import * as Icon from "@/icons/icons"

//- Components
import Favorite from "./Favorite"

//- Types
import type { SneakerToFavorite } from "../Section/SneakerModal"

interface FavoriteScreenProps {
	favorites?: SneakerToFavorite[]
}

export default function FavoriteScreen(props: FavoriteScreenProps): React.JSX.Element {
	return (
		<div className="favorite-screen" onClick={event => event.stopPropagation()}>
			<div className="favorite-container">
				<h3 className="favorite-screen-title">
					<Icon.Favorite className="favorite-screen-title-icon" />Favoritos
				</h3>

				<section className="favorite-screen-sneakers">
					{props.favorites?.map((sneaker) => (
						<Favorite key={sneaker.model} image={sneaker.image} model={sneaker.model} />
					))}
				</section>
			</div>
		</div>
	)
}
