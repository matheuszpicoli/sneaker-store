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
	const currentYear = new Date().getFullYear()

	const startDate = new Date(currentYear, startMonth - 1, startDay)
	const currentDate = new Date(currentYear, month - 1, day)
	const endDate = new Date(currentYear, endMonth - 1, endDay)

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
					<h3 className="section-title">Masculino</h3>
					<div className="sneakers">
						{masculineSneakers.map((sneaker: StaticImageData, index: number) => (
							<figure key={index}>
								<Image
									className="sneaker-photo"
									src={sneaker}
									alt={`Tênis masculino ${index + 1}`}
									loading="lazy"
									priority={false}
								/>
								<figcaption className="sneaker-photo-subtitle">
									{`Modelo ${index + 1}`}
								</figcaption>
							</figure>
						))}
					</div>
				</section>
			)}
			{props.reference === "feminine" && (
				<section id="feminine" className="feminine">
					<h3 className="section-title">Feminino</h3>
					<div className="sneakers">
						{feminineSneakers.map((sneaker: StaticImageData, index: number) => (
							<figure key={index}>
								<Image
									className="sneaker-photo"
									src={sneaker}
									alt={`Tênis feminino ${index + 1}`}
									loading="lazy"
									priority={false}
								/>
								<figcaption className="sneaker-photo-subtitle">
									{`Modelo ${index + 1}`}
								</figcaption>
							</figure>
						))}
					</div>
				</section>
			)}
			{props.reference === "teens" && (
				<section id="teens" className="teens">
					<h3 className="section-title">Teens</h3>
					<div className="sneakers">
						{teensSneakers.map((sneaker: StaticImageData, index: number) => (
							<figure key={index}>
								<Image
									className="sneaker-photo"
									src={sneaker}
									alt={`Tênis adolescente ${index + 1}`}
									loading="lazy"
									priority={false}
								/>
								<figcaption className="sneaker-photo-subtitle">
									{`Modelo ${index + 1}`}
								</figcaption>
							</figure>
						))}
					</div>
				</section>
			)}
			{props.reference === "collections" && (
				<section id="collections" className="collections">
					{getSeason() === "summer" && (
						<React.Fragment>
							<h3 className="section-title">Coleções de Verão</h3>
							<div className="sneakers">
								{collectionSneakers.summer.map((sneaker: StaticImageData, index: number) => (
									<figure key={index}>
										<Image
											className="sneaker-photo"
											src={sneaker}
											alt={`Tênis verão ${index + 1}`}
											loading="lazy"
											priority={false}
										/>
										<figcaption className="sneaker-photo-subtitle">
											{`Modelo ${index + 1}`}
										</figcaption>
									</figure>
								))}
							</div>
						</React.Fragment>
					)}
					{getSeason() === "autumn" && (
						<React.Fragment>
							<h3 className="section-title">Coleções de Outono</h3>
							<div className="sneakers">
								{collectionSneakers.autumn.map((sneaker: StaticImageData, index: number) => (
									<figure key={index}>
										<Image
											className="sneaker-photo"
											src={sneaker}
											alt={`Tênis outono ${index + 1}`}
											loading="lazy"
											priority={false}
										/>
										<figcaption className="sneaker-photo-subtitle">
											{`Modelo ${index + 1}`}
										</figcaption>
									</figure>
								))}
							</div>
						</React.Fragment>
					)}
					{getSeason() === "winter" && (
						<React.Fragment>
							<h3 className="section-title">Coleções de Inverno</h3>
							<div className="sneakers">
								{collectionSneakers.winter.map((sneaker: StaticImageData, index: number) => (
									<figure key={index}>
										<Image
											className="sneaker-photo"
											src={sneaker}
											alt={`Tênis inverno ${index + 1}`}
											loading="lazy"
											priority={false}
										/>
										<figcaption className="sneaker-photo-subtitle">
											{`Modelo ${index + 1}`}
										</figcaption>
									</figure>
								))}
							</div>
						</React.Fragment>
					)}
					{getSeason() === "spring" && (
						<React.Fragment>
							<h3 className="section-title">Coleções de Primavera</h3>
							<div className="sneakers">
								{collectionSneakers.spring.map((sneaker: StaticImageData, index: number) => (
									<figure key={index}>
										<Image
											className="sneaker-photo"
											src={sneaker}
											alt={`Tênis primavera ${index + 1}`}
											loading="lazy"
											priority={false}
										/>
										<figcaption className="sneaker-photo-subtitle">
											{`Modelo ${index + 1}`}
										</figcaption>
									</figure>
								))}
							</div>
						</React.Fragment>
					)}
				</section>
			)}
		</React.Fragment>
	)
}
