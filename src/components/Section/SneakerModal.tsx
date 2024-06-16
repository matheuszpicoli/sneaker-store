//- React
import React from "react"

//- Next
import Image from "next/image"
import type { StaticImageData } from "next/image"

//- Icons
import * as Icon from "@/icons/icons"

//- Components/Variables
import { maskForPrice } from "."

interface SneakerModalProps {
	image: StaticImageData,
	model: string
	price: number
	onClose: () => void
}

export default function SneakerModal(props: SneakerModalProps) {
	return (
		<section className="modal">
			<div className="modal-container">
				<section className="modal-actions-area">
					<button
						type="button"
						className="modal-button"
						onClick={props.onClose}
					>
						Fechar <Icon.Close className="button-icon" />
					</button>
				</section>

				<section className="modal-sneaker-area">
					<figure className="modal-picture-frame">
						<figcaption className="modal-image-title">{props.model}</figcaption>
						<Image
							className="modal-image"
							src={props.image}
							alt={props.model}
							priority={true}
						/>
					</figure>
					<div className="modal-price-and-actions-area">
						<section className="modal-sneaker-price">
							<p className="modal-original-price">{maskForPrice(props.price)} <span className="or">ou</span></p>
							<ul className="modal-installments">
								{[2, 3, 4, 5, 6, 7, 8, 9, 10].map(index => (
									<li key={index} className="modal-installment-price">
										{index}x de {maskForPrice(props.price / index)} sem juros
									</li>
								))}
							</ul>
						</section>
						<section className="modal-sneaker-actions">
							<button type="button" className="add-to-favorites-button">
								Adicionar aos favoritos<Icon.Favorite className="add-to-favorites-icon" />
							</button>
							<button type="button" className="add-to-cart-button">
								Adicionar ao carrinho<Icon.Cart className="add-to-cart-icon" />
							</button>
						</section>
					</div>
				</section>
			</div>
		</section>
	)
}
