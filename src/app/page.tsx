"use client"

//- React
import React, { useState } from "react"

//- Next
import Head from "next/head"

//- Styles
import "@/styles/index.scss"

//- Types
import type { SneakerDetails } from "@/api/sneakers"

//- Components
import Header from "@/components/Header/Header"
import SneakerHighlight from "@/components/SneakerHighlight/SneakerHighlight"
import Section from "@/components/Section/Section"
import Footer from "@/components/Footer/Footer"

export default function MPSneakers(): React.JSX.Element {
	const [sneakers, setSneakers] = useState<SneakerDetails[]>([])

	const handleFilterApplied = (sneakersFiltered: SneakerDetails[]): void => setSneakers(sneakersFiltered)

	return (
		<React.Fragment>
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
			</Head>
			<Header filter={handleFilterApplied} />
			<SneakerHighlight />
			<Section reference="masculine" filter={sneakers} />
			<Section reference="feminine" filter={sneakers} />
			<Section reference="teens" filter={sneakers} />
			<Section reference="collections" filter={sneakers} />
			<Footer />
		</React.Fragment>
	)
}
