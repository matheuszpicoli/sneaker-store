"use client"

//- React
import React from "react"

//- Next
import Image from "next/image"
import { useRouter } from "next/navigation"

//- Components/Variables
import { maskForPrice } from "."

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

	const handleSneakerProperties = (sneakerId: number) => router.push(`/sneaker/${sneakerId}`)

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
								onClick={() => handleSneakerProperties(sneaker.id)}
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

/*
const allSneakers = [
	...sneakers.masculineSneakers,
	...sneakers.feminineSneakers,
	...sneakers.teensSneakers,
	...sneakers.collectionSneakers.autumn,
	...sneakers.collectionSneakers.spring,
	...sneakers.collectionSneakers.summer,
	...sneakers.collectionSneakers.winter
]
*/
