"use client"

//- React
import React, { useState } from "react"

//- Icons
import * as Icon from "../icons/icons"

export default function Header(): React.JSX.Element {
	const [filtering, setFiltering] = useState<boolean>(false)

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
						<Icon.Favorite className="favorite-icon" />
						<span className="icon-description">Favoritos</span>
					</section>
					<section
						className="filter"
						onClick={(): void => setFiltering(toggleState => !toggleState)}
					>
						{!filtering ? (
							<React.Fragment>
								<Icon.Filter className="filter-icon" />
								<span className="icon-description">Filtro</span>
							</React.Fragment>
						) : (
							<React.Fragment>
								<Icon.Unfilter className="filter-icon" />
								<span className="icon-description">Limpar</span>
							</React.Fragment>
						)}
					</section>
				</div>
			</nav>
		</header>
	)
}
