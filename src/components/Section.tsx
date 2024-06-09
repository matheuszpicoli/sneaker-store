//- React
import React from "react"

//- Next
import Image from "next/image"
import type { StaticImageData } from "next/image"

//- Images
import { masculineSneakers, feminineSneakers, teensSneakers, collectionSneakers } from "../images/images"

interface SectionProps {
	reference: "masculine" | "feminine" | "teens" | "collections"
}

type Month = {
	january: 1,
	february: 2,
	march: 3,
	april: 4,
	may: 5,
	june: 6,
	july: 7,
	august: 8,
	september: 9,
	october: 10,
	november: 11,
	december: 12
}

type MonthNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

type DayOfMonth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31

type Season = "summer" | "autumn" | "winter" | "spring" | undefined

function isDateInRange(startMonth: MonthNumber, startDay: DayOfMonth, endMonth: MonthNumber, endDay: DayOfMonth): boolean {
	const currentMonth = new Date().getMonth() + 1
	const currentDay = new Date().getDate()

	const startDate = new Date(startMonth - 1, startDay)
	const currentDate = new Date(currentMonth - 1, currentDay)
	const endDate = new Date(endMonth - 1, endDay)

	return currentDate >= startDate && currentDate < endDate
}

function getSeason(): Season {
	const month: Month = { january: 1, february: 2, march: 3, april: 4, may: 5, june: 6, july: 7, august: 8, september: 9, october: 10, november: 11, december: 12 }

	switch (true) {
		case isDateInRange(month.december, 22, month.march, 20):
			return "summer"
		case isDateInRange(month.march, 20, month.june, 21):
			return "autumn"
		case isDateInRange(month.june, 21, month.september, 23):
			return "winter"
		case isDateInRange(month.september, 23, month.december, 22):
			return "spring"
		default:
			return undefined
	}
}

const aboutTheSection: string = "Confira a nossa seção de tênis para".concat(" ")

export default function Section<T extends SectionProps>(props: T): React.JSX.Element {
	return (
		<React.Fragment>
			{props.reference === "masculine" && (
				<section id="masculine" className="masculine">
					<h3 className="section-title">Masculino</h3>
					<div className="content">
						<p className="about">
							{`${aboutTheSection.concat("os homens.")}`}
						</p>
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
					</div>
				</section>
			)}
			{props.reference === "feminine" && (
				<section id="feminine" className="feminine">
					<h3 className="section-title">Feminino</h3>
					<div className="content">
						<p className="about">
							{`${aboutTheSection.concat("as mulheres.")}`}
						</p>
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
					</div>
				</section>
			)}
			{props.reference === "teens" && (
				<section id="teens" className="teens">
					<h3 className="section-title">Teens</h3>
					<div className="content">
						<p className="about">
							{`${aboutTheSection.concat("os jovens.")}`}
						</p>
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
					</div>
				</section>
			)}
			{props.reference === "collections" && (
				<section id="collections" className="collections">
					{getSeason() === "summer" && (
						<React.Fragment>
							<h3 className="section-title">Coleções de Verão</h3>
							<div className="content">
								<p className="about">
									{`${aboutTheSection.concat("o verão.")}`}
								</p>
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
							</div>
						</React.Fragment>
					)}
					{getSeason() === "autumn" && (
						<React.Fragment>
							<h3 className="section-title">Coleções de Outono</h3>
							<div className="content">
								<p className="about">
									{`${aboutTheSection.concat("o outono.")}`}
								</p>
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
							</div>
						</React.Fragment>
					)}
					{getSeason() === "winter" && (
						<React.Fragment>
							<h3 className="section-title">Coleções de Inverno</h3>
							<div className="content">
								<p className="about">
									{`${aboutTheSection.concat("o inverno.")}`}
								</p>
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
							</div>
						</React.Fragment>
					)}
					{getSeason() === "spring" && (
						<React.Fragment>
							<h3 className="section-title">Coleções de Primavera</h3>
							<div className="content">
								<p className="about">
									{`${aboutTheSection.concat("a primavera.")}`}
								</p>
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
							</div>
						</React.Fragment>
					)}
					{getSeason() === undefined && (
						<h3 className="section-title">Em breve</h3>
					)}
				</section>
			)}
		</React.Fragment>
	)
}
