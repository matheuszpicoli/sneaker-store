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
import Header from "@/components/Header"
import SneakerHighlight from "@/components/SneakerHighlight"
import Section from "@/components/Section"
import Footer from "@/components/Footer"

export default function MPSneakers(): React.JSX.Element {
	const [sneakersThatHaveBeenFiltered, setsneakersThatHaveBeenFiltered] = useState<SneakerDetails[]>([])

	const handleFilterApplied = (sneakers: SneakerDetails[]) => setsneakersThatHaveBeenFiltered(sneakers)

	return (
		<React.Fragment>
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
			</Head>
			<Header filter={handleFilterApplied} />
			<SneakerHighlight />
			<Section reference="masculine" filter={sneakersThatHaveBeenFiltered} />
			<Section reference="feminine" filter={sneakersThatHaveBeenFiltered} />
			<Section reference="teens" filter={sneakersThatHaveBeenFiltered} />
			<Section reference="collections" filter={sneakersThatHaveBeenFiltered} />
			<Footer />
		</React.Fragment>
	)
}
