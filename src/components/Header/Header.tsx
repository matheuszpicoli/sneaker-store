//- React
import React, { useState, useLayoutEffect } from "react"

//- Icons
import * as Icon from "@/icons/icons"

//- Components
import FilterSceen from "../FilterScreen/FilterSceen"
import Logo from "./Logo"
import NavigateMenu from "./NavigateMenu"

//- API
import type { SneakerDetails } from "@/api/sneakers"

interface HeaderProps {
	filter: (filter: SneakerDetails[]) => void
}

export default function Header(props: HeaderProps): React.JSX.Element {
	const [filtering, setFiltering] = useState<boolean>(false)

	useLayoutEffect(() => {
		if (filtering) document.body.classList.add("no-events")
		else document.body.classList.remove("no-events")
	}, [filtering])

	useLayoutEffect(() => {
		if (filtering) {
			const handleKeyDown = (event: KeyboardEvent): void => {
				if (event.key === "Escape") setFiltering(false)
			}

			window.addEventListener("keydown", handleKeyDown)

			return () => window.removeEventListener("keydown", handleKeyDown)
		}
	}, [filtering, setFiltering])

	return (
		<header>
			<nav className="navbar">
				<Logo />
				<div className="link-area">
					<NavigateMenu navigateTo="masculine" linkText="Masculino" />
					<NavigateMenu navigateTo="feminine" linkText="Feminino" />
					<NavigateMenu navigateTo="teens" linkText="Teens" />
					<NavigateMenu navigateTo="collections" linkText="Coleções" />
				</div>
				<div className="icons-area">
					<section className="favorite">
						<div className="icon-area">
							<Icon.Favorite className="favorite-icon" />
							<span className="icon-description">Favoritos</span>
						</div>
					</section>
					{filtering && (
						<section className="filter">
							<div className="icon-area" onClick={(): void => setFiltering(false)}>
								<Icon.Unfilter className="filter-icon" />
								<span className="icon-description">Esconder</span>
							</div>

							<FilterSceen onFilterApplied={props.filter} />
						</section>
					)}
					{!filtering && (
						<section className="filter">
							<div className="icon-area" onClick={(): void => setFiltering(true)}>
								<Icon.Filter className="filter-icon" />
								<span className="icon-description">Filtro</span>
							</div>
						</section>
					)}
				</div>
			</nav>
		</header>
	)
}
