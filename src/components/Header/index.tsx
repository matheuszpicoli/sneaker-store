//- React
import React, { useState, useLayoutEffect } from "react"

//- Icons
import * as Icon from "@/icons/icons"

//- Components
import CartScreen from "../CartScreen"
import FilterSceen from "../FilterScreen"

import Logo from "./Logo"
import NavigateMenu from "./NavigateMenu"

//- API
import type { SneakerDetails } from "@/api/sneakers"

interface HeaderProps {
	filter: (filter: SneakerDetails[]) => void
}

export default function Header(props: HeaderProps): React.JSX.Element {
	const [filterScreen, setFilterScreen] = useState<boolean>(false)
	const [cartScreen, setCartScreen] = useState<boolean>(false)

	useLayoutEffect(() => {
		if (filterScreen || cartScreen) document.body.classList.add("no-events")
		else document.body.classList.remove("no-events")
	}, [filterScreen, cartScreen])

	useLayoutEffect(() => {
		const handleKeyDown = (event: KeyboardEvent): void => {
			const esc: string = "Escape"

			if (event.key === esc) {
				if (filterScreen) setFilterScreen(false)
				else if (cartScreen) setCartScreen(false)
			}
		}

		window.addEventListener("keydown", handleKeyDown)

		return () => window.removeEventListener("keydown", handleKeyDown)
	}, [filterScreen, cartScreen, setFilterScreen, setCartScreen])

	return (
		<header>
			<nav className="navbar">
				<Logo />
				<div className="link-area">
					<NavigateMenu navigateToSection="masculine" linkText="Masculino" />
					<NavigateMenu navigateToSection="feminine" linkText="Feminino" />
					<NavigateMenu navigateToSection="teens" linkText="Teens" />
					<NavigateMenu navigateToSection="collections" linkText="Coleções" />
				</div>
				<div className="icons-area">
					{filterScreen ? (
						<section className="filter">
							<div className="icon-area" onClick={(): void => setFilterScreen(false)}>
								<Icon.Unfilter className="filter-icon" title="Esconder filtro" />
							</div>

							<FilterSceen onFilterApplied={props.filter} />
						</section>
					) : (
						<section className="filter">
							<div className="icon-area" onClick={(): void => setFilterScreen(true)}>
								<Icon.Filter className="filter-icon" title="Filtro" />
							</div>
						</section>
					)}
					{cartScreen ? (
						<section className="cart">
							<div className="icon-area" onClick={(): void => setCartScreen(false)}>
								<Icon.Cart className="cart-icon" title="Carrinho" />
							</div>

							<CartScreen />
						</section>
					) : (
						<section className="cart">
							<div className="icon-area" onClick={(): void => setCartScreen(true)}>
								<Icon.Cart className="cart-icon" title="Carrinho" />
							</div>
						</section>
					)}
				</div>
			</nav>
		</header>
	)
}
