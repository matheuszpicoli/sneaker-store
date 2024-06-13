"use client"

//- React
import React, { useState, useLayoutEffect } from "react"

//- Icons
import * as Icon from "../icons/icons"

//- Components
import FilterSceen from "./FilterSceen"

export default function Header(): React.JSX.Element {
	const [filtering, setFiltering] = useState<boolean>(false)

	useLayoutEffect(() => {
		filtering ?
			document.body.classList.add("no-events") :
			document.body.classList.remove("no-events")
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

	function navigateTo(element: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void {
		event.preventDefault()

		window.history.pushState(null, window.location.pathname)

		document.getElementById(element)?.scrollIntoView()
	}

	const returnToTop = () => window.scrollTo(0, 0)

	return (
		<header>
			<nav className="navbar">
				<div
					className="logo-area"
					onClick={returnToTop}
				>
					<h1 className="logo-title">
						<span className="emphasis-title-font">MP</span> Sneakers
					</h1>
				</div>
				<div className="link-area">
					<div className="link-nav">
						<a onClick={event => navigateTo("masculine", event)} className="link-to-path">
							Masculino
						</a>
					</div>
					<div className="link-nav">
						<a onClick={event => navigateTo("feminine", event)} className="link-to-path">
							Feminino
						</a>
					</div>
					<div className="link-nav">
						<a onClick={event => navigateTo("teens", event)} className="link-to-path">
							Teens
						</a>
					</div>
					<div className="link-nav">
						<a onClick={event => navigateTo("collections", event)} className="link-to-path">
							Coleções
						</a>
					</div>
				</div>
				<div className="icons-area">
					<section className="favorite">
						<div className="icon-area">
							<Icon.Favorite className="favorite-icon" />
							<span className="icon-description">Favoritos</span>
						</div>
					</section>
					<section className="filter">
						{!filtering ? (
							<div className="icon-area" onClick={(): void => setFiltering(true)}>
								<Icon.Filter className="filter-icon" />
								<span className="icon-description">Filtro</span>
							</div>
						) : (
							<React.Fragment>
								<div className="icon-area" onClick={(): void => setFiltering(false)}>
									<Icon.Unfilter className="filter-icon" />
									<span className="icon-description">Esconder</span>
								</div>

								<FilterSceen />
							</React.Fragment>
						)}
					</section>
				</div>
			</nav>
		</header>
	)
}
