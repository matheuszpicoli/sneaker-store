//- React
import React from "react"

//- Next
import Image, { StaticImageData } from "next/image"

//- Images
import { masculineSneakers, feminineSneakers, teensSneakers, collectionSneakers } from "../images/images"

interface SectionProps {
	reference: "masculine" | "feminine" | "teens" | "collections"
}

type Season = "summer" | "autumn" | "winter" | "spring"

function isDateInRange(
	day: number,
	month: number,
	startMonth: number,
	startDay: number,
	endMonth: number,
	endDay: number
): boolean {
	const startDate = new Date(new Date().getFullYear(), startMonth - 1, startDay)
	const endDate = new Date(new Date().getFullYear(), endMonth - 1, endDay)
	const currentDate = new Date(new Date().getFullYear(), month - 1, day)

	return currentDate >= startDate && currentDate < endDate
}

function getSeason(date: Date = new Date()): Season {
	const day = date.getDate()
	const month = date.getMonth() + 1

	if (isDateInRange(day, month, 12, 22, 3, 20)) {
		return "summer"
	} else if (isDateInRange(day, month, 3, 20, 6, 21)) {
		return "autumn"
	} else if (isDateInRange(day, month, 6, 21, 9, 23)) {
		return "winter"
	} else if (isDateInRange(day, month, 9, 23, 12, 22)) {
		return "spring"
	}

	throw new Error("Data inválida")
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
								alt={`Tênis adolescente ${index + 1}`}
								loading="lazy"
								priority={false}
							/>
						))}
					</div>
				</section>
			)}
			{props.reference === "collections" && (
				<section id="collections" className="collections">
					{getSeason() === "summer" && (
						<div className="collection-sneakers">
							{collectionSneakers.summer.map((sneaker: StaticImageData, index: number) => (
								<Image
									key={index}
									className="collection-sneaker-photo"
									src={sneaker}
									alt={`Tênis verão ${index + 1}`}
									loading="lazy"
									priority={false}
								/>
							))}
						</div>
					)}
					{getSeason() === "autumn" && (
						<div className="collection-sneakers">
							{collectionSneakers.autumn.map((sneaker: StaticImageData, index: number) => (
								<Image
									key={index}
									className="collection-sneaker-photo"
									src={sneaker}
									alt={`Tênis outono ${index + 1}`}
									loading="lazy"
									priority={false}
								/>
							))}
						</div>
					)}
					{getSeason() === "winter" && (
						<div className="collection-sneakers">
							{collectionSneakers.winter.map((sneaker: StaticImageData, index: number) => (
								<Image
									key={index}
									className="collection-sneaker-photo"
									src={sneaker}
									alt={`Tênis inverno ${index + 1}`}
									loading="lazy"
									priority={false}
								/>
							))}
						</div>
					)}
					{getSeason() === "spring" && (
						<div className="collection-sneakers">
							{collectionSneakers.spring.map((sneaker: StaticImageData, index: number) => (
								<Image
									key={index}
									className="collection-sneaker-photo"
									src={sneaker}
									alt={`Tênis primavera ${index + 1}`}
									loading="lazy"
									priority={false}
								/>
							))}
						</div>
					)}
				</section>
			)}
		</React.Fragment>
	)
}
