"use client"

//- React
import React, { useState } from "react"

//- Next
import Image from "next/image"

//- Components/Variables
import { maskForPrice } from "."
import SneakerModal from "./SneakerModal"

//- Types
import type { SneakerDetails } from "@/api/sneakers"

interface SectionModelProps {
	id: string
	title: string
	text: string
	sneakers: SneakerDetails[]
}

export default function SectionModel(props: SectionModelProps): React.JSX.Element {
	const [selectedSneaker, setSelectedSneaker] = useState<SneakerDetails | null>(null)

	const handleToRenderComponent = (sneaker: SneakerDetails): void => setSelectedSneaker(sneaker)
	const closeComponent = (): void => setSelectedSneaker(null)

	return (
		<section id={props.id} className={props.id}>
			<h3 className="section-title">{props.title}</h3>
			<div className="content">
				<p className="about">{props.text}</p>
				<div className="sneakers">
					{props.sneakers.map((sneaker, index) => (
						<figure key={index}>
							<Image
								className="sneaker-photo"
								src={sneaker.image}
								alt={`Tênis ${props.title.toLowerCase()} ${index + 1}`}
								loading="lazy"
								priority={false}
								onClick={(): void => handleToRenderComponent(sneaker)}
							/>
							<figcaption className="sneaker-photo-subtitle">
								{sneaker.model}
								<p className="sneaker-price">{maskForPrice(sneaker.price)}</p>
							</figcaption>
						</figure>
					))}
				</div>
			</div>
			{selectedSneaker && (
				<SneakerModal
					image={selectedSneaker.image}
					model={selectedSneaker.model}
					price={selectedSneaker.price}
					onClose={closeComponent}
				/>
			)}
		</section>
	)
}
