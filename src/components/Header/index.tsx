//- React
import React, { useState, useLayoutEffect } from "react"

//- Next
import Link from "next/link"

//- Icons
import * as Icon from "@/icons/icons"

//- Components
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

	useLayoutEffect(() => {
		if (filterScreen) document.body.classList.add("no-events")
		else document.body.classList.remove("no-events")
	}, [filterScreen])

	useLayoutEffect(() => {
		const handleKeyDown = (event: KeyboardEvent): void => {
			const esc: string = "Escape"

			if (filterScreen && event.key === esc) setFilterScreen(false)
		}

		window.addEventListener("keydown", handleKeyDown)

		return () => window.removeEventListener("keydown", handleKeyDown)
	}, [filterScreen, setFilterScreen])

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
					<section className="cart">
						<div className="icon-area">
							<Link id="link-to-cart" href="/cart">
								<Icon.Cart className="cart-icon" title="Carrinho" />
							</Link>
						</div>
					</section>
				</div>
			</nav>
		</header>
	)
}
