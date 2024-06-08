"use client"

//- React
import React from "react"

//- Icons
import * as Icon from "../icons/icons"

export default function Header(): React.JSX.Element {
	const navigateTo = (element: string, event: React.MouseEvent): void => {
		event.preventDefault()

		window.history.pushState(null, window.location.pathname)

		document.getElementById(element)?.scrollIntoView()
	}

	const returnToTop = () => window.scrollTo(0, 0)

	return (
		<nav className="navbar">
			<div
				className="logo-area"
				onClick={returnToTop}
			>
				<Icon.Sneaker className="logo-icon" />
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
			<div className="search-area">
				<label className="search-label" htmlFor="search-input">
					<Icon.MagnifyingGlass className="search-icon" />
				</label>
				<input
					id="search-input"
					type="search"
					name="search-input"
					placeholder="Pesquisar"
				/>
			</div>
		</nav>
	)
}
