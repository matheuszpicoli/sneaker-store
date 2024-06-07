//- React
import React from "react"

//- Next
import Image, { StaticImageData } from "next/image"

//- Images
import { masculineSneakers, feminineSneakers, teensSneakers, collectionSneakers } from "../images/images"

interface SectionProps {
	reference: "masculine" | "feminine" | "teens" | "collections"
}

export default function Section<T extends SectionProps>(props: T): React.JSX.Element {
	return (
		<React.Fragment>
			{props.reference === "masculine" && (
				<section id="masculine" className="masculine">
					<div className="masculine-sneakers">
						{masculineSneakers.map((sneaker: StaticImageData, index: number) => (
							<Image
								key={index}
								className="masculine-sneaker-photo"
								src={sneaker}
								alt={`Tênis masculino ${index + 1}`}
								loading="lazy"
								priority={false}
							/>
						))}
					</div>
				</section>
			)}
			{props.reference === "feminine" && (
				<section id="feminine" className="feminine">
					<div className="feminine-sneakers">
						{feminineSneakers.map((sneaker: StaticImageData, index: number) => (
							<Image
								key={index}
								className="feminine-sneaker-photo"
								src={sneaker}
								alt={`Tênis feminino ${index + 1}`}
								loading="lazy"
								priority={false}
							/>
						))}
					</div>
				</section>
			)}
			{props.reference === "teens" && (
				<section id="teens" className="teens">
					<div className="teens-sneakers">
						{teensSneakers.map((sneaker: StaticImageData, index: number) => (
							<Image
								key={index}
								className="teens-sneaker-photo"
								src={sneaker}
								alt={`Tênis masculino ${index + 1}`}
								loading="lazy"
								priority={false}
							/>
						))}
					</div>
				</section>
			)}
			{props.reference === "collections" && (
				<section id="collections" className="collections">
				</section>
			)}
		</React.Fragment>
	)
}
