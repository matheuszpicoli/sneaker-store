//- React
import React from "react"

//- Next
import Link from "next/link"

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
							{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(index => (
								<li key={index}>
									Tênis {index}
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
