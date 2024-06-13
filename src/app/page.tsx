"use client"

//- React
import React, { useState } from "react"

//- Next
import Head from "next/head"

//- Styles
import "../styles/index.scss"

//- API
import * as sneakers from "@/api/sneakers"
import type { SneakerDetails } from "@/api/sneakers"

//- Components
import Header from "@/components/Header"
import SneakerHighlight from "@/components/SneakerHighlight"
import Section from "@/components/Section"
import Footer from "@/components/Footer"

export default function MPSneakers(): React.JSX.Element {
	const [filteredSneakers, setFilteredSneakers] = useState<sneakers.SneakerDetails[]>([])

	const handleFilterApplied = (sneakers: SneakerDetails[]) => setFilteredSneakers(sneakers)

	return (
		<React.Fragment>
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
			</Head>
			<Header filter={handleFilterApplied} />
			<SneakerHighlight />
			<Section reference="masculine" filteredSneakers={filteredSneakers} />
			<Section reference="feminine" filteredSneakers={filteredSneakers} />
			<Section reference="teens" filteredSneakers={filteredSneakers} />
			<Section reference="collections" filteredSneakers={filteredSneakers} />
			<Footer />
		</React.Fragment>
	)
}
