"use client"

//- React
import React from "react"

//- Next
import Link from "next/link"

//- Icons
import * as Icon from "../icons/icons"

export default function Header(): React.JSX.Element {
	const returnToTop = (): void => window.scrollTo(0, 0)

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
				<Link href="#" className="link-nav">Masculino</Link>
				<Link href="#" className="link-nav">Feminino</Link>
				<Link href="#" className="link-nav">Kids</Link>
				<Link href="#" className="link-nav">Coleções</Link>
			</div>
			<div className="search-area">
				<label className="search-label" htmlFor="search-input">
					<Icon.MagnifyingGlass className="search-icon" />
				</label>
				<input
					id="search-input"
					type="search"
					name="search-input"
				/>
			</div>
		</nav>
	)
}
