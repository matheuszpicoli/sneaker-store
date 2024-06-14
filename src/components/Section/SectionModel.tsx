//- React
import React from "react"

//- Next
import { useRouter } from "next/navigation"
import Image from "next/image"

//- Components/Variables
import { maskForPrice } from "./Section"
import { lowerCaseNoSpaces } from "../SneakerProperties/SneakerProperties"

//- Types
import type { SneakerDetails } from "@/api/sneakers"

interface SectionModelProps {
	id: string
	title: string
	text: string
	sneakers: SneakerDetails[]
}

export default function SectionModel(props: SectionModelProps): React.JSX.Element {
	const router = useRouter()

	const handleSneakerClick = (sneaker: SneakerDetails) => router.push(`/sneakers/${encodeURIComponent(lowerCaseNoSpaces(sneaker.model))}`)

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
								onClick={() => handleSneakerClick(sneaker)}
							/>
							<figcaption className="sneaker-photo-subtitle">
								{sneaker.model}
								<p className="sneaker-price">{maskForPrice(sneaker.price)}</p>
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	)
}
