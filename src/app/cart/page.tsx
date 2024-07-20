//- React
import React from "react"

//- Next
import Link from "next/link"
import Image from "next/image"

//- API
import * as sneakerImage from "@/api/images"

//- Icons
import * as Icon from "@/icons/icons"

export default function CartScreen(): React.JSX.Element {
	return (
		<section className="cart-screen">

			<nav className="cart-screen-navigation">
				<button className="cart-screen-navigation-button" type="button">
					<Link id="return-to-the-store" href="/">
						<Icon.ArrowLeft className="cart-screen-navigation-button-icon" />
						<span className="cart-screen-navigation-button-text">
							Voltar para a <span className="emphasis">MP Sneakers</span>
						</span>
					</Link>
				</button>
			</nav>

			<div className="cart-screen-content">
				<h1 className="cart-screen-title">
					<Icon.Cart className="cart-screen-icon" />Carrinho
				</h1>
				<hr className="cart-screen-divider" />
				<section className="cart-screen-items">
					<details open>
						<summary>Meus itens</summary>
						<ul className="cart-screen-items-list">
							{[1, 2, 3, 4, 5, 6].map(index => (
								<li key={index}>
									<Image
										className="cart-screen-items-list-sneaker-image"
										src={sneakerImage.summer1}
										alt={`Tênis ${index}`}
										width={150}
										height={150}
										priority={false}
									/>
									<span className="cart-screen-items-list-sneaker-description">
										Tênis {index}
									</span>
									<button
										className="cart-screen-items-list-remove-item-button"
										type="button"
										aria-label={`Remover "Tênis ${index}".`}
									>
										<Icon.Remove className="cart-screen-items-list-remove-item-icon" />
									</button>
								</li>
							))}
						</ul>
					</details>
				</section>
				<section className="cart-screen-confirm-order">
					<button className="cart-screen-confirm-order-button" type="button">
						<Icon.Check className="cart-screen-confirm-order-icon" />
						<span className="cart-screen-confirm-order-text">
							Tudo certo
						</span>
					</button>
				</section>
			</div>

		</section>
	)
}
